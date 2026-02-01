import '../styles/Explore.css';
import { useEffect, useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
  Button
} from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

function Explore() {
    const [emotion, setEmotion] = useState('');
    const [date, setDate] = useState('');
    const [search, setSearch] = useState('');
    const [entries, setEntries] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [showToTop, setShowToTop] = useState(false);


    const formatDate = (isoDate) => {
        return new Date(isoDate).toISOString().split('T')[0];
    }

    useEffect(() => {
    fetch('https://world-journal-project-api.vercel.app/api/entries')
        .then(res => res.json())
        .then(data => setEntries(data))
        .catch(err => console.error(err));
    }, []);

    const filteredEntries = entries.filter(entry => {
    const matchesEmotion =
        !emotion || entry.emotion === emotion;

    const matchesDate =
        !date || formatDate(entry.date) === date;

    const matchesSearch =
        entry.title.toLowerCase().includes(search.toLowerCase()) ||
        entry.content.toLowerCase().includes(search.toLowerCase());

    return matchesEmotion && matchesDate && matchesSearch;
    });

    const getEmoticonIcon = (emotion) => {
        switch (emotion) {
            case 'happy':
            return 'sentiment_satisfied';
            case 'sad':
            return 'sentiment_sad';
            case 'excited':
            return 'mood_heart';
            case 'anxious':
            return 'sentiment_stressed';
            case 'angry':
            return 'sentiment_very_dissatisfied';
            case 'bored':
            return 'mood_bad';
        }
    };

    useEffect(() => {
    const handleScroll = () => {
        setShowToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="explore-page">
            <Navbar />
            <div className="explore-container">
                <h1 className="explore-title">Explore the World Journal Project</h1>
                <p className="explore-desc">Discover journal entries from around the world here. <br /> Looking for something specific? Use the sort filter!</p>
                <Box className="explore-filters">
                    <TextField
                        placeholder="Search entries..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        size="small"
                        className="explore-search"
                    />

                    <FormControl className="explore-form-control" size="small" sx={{ minWidth: 120 }}>
                        <InputLabel id="emotion-label">Emotion</InputLabel>
                        <Select
                            labelId="emotion-label"
                            value={emotion}
                            label="Emotion"
                            onChange={(e) => setEmotion(e.target.value)}
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="happy">Happy</MenuItem>
                            <MenuItem value="sad">Sad</MenuItem>
                            <MenuItem value="excited">Excited</MenuItem>
                            <MenuItem value="anxious">Anxious</MenuItem>
                            <MenuItem value="angry">Angry</MenuItem>
                            <MenuItem value="bored">Bored</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                    className="explore-date-picker"
                        label="Date"
                        type="date"
                        size="small"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        slotProps={{ inputLabel: { shrink: true }, }}
                    />
                </Box>
                <div className="explore-entries">
                {filteredEntries.length === 0 ? (
                    <p>No entries found.</p>
                ) : (
                    filteredEntries.map(entry => (
                    <div key={entry._id} className="journal-card">
                        <div className="journal-card-top">
                            <h3>{entry.title}</h3>
                            <p className={`journal-card-emotion emotion-${entry.emotion}`}>{entry.emotion}
                                <span className="material-symbols-outlined">{getEmoticonIcon(entry.emotion)}</span>
                            </p>
                        </div>
                        <div className="journal-card-bottom">
                            <p className="journal-card-date"><strong>Date:</strong> {formatDate(entry.date)}</p>
                            <p className="journal-card-content">{entry.content}</p>
                        </div>
                        <Button variant="outlined" className="read-more-btn" onClick={() => setSelectedEntry(entry)}>Read More</Button>
                    </div>
                    ))
                )}
                </div>
            </div>
            {selectedEntry && (
                <div className="journal-modal-overlay" onClick={() => setSelectedEntry(null)}>
                    <div className="journal-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="journal-modal-top">
                            <h2>{selectedEntry.title}</h2>
                            <p className={`journal-modal-emotion emotion-${selectedEntry.emotion}`}>{selectedEntry.emotion}
                                <span className="material-symbols-outlined">{getEmoticonIcon(selectedEntry.emotion)}</span>
                            </p>
                            <button className="close-btn" onClick={() => setSelectedEntry(null)}>✕</button>
                        </div>

                        <div className="journal-modal-bottom">
                            <p className="journal-modal-date">
                                <strong>Date:</strong> {formatDate(selectedEntry.date)}
                            </p>

                            <p className="journal-modal-content">
                                {selectedEntry.content}
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {showToTop && (
            <button
                className="to-top-btn"
                onClick={() =>
                window.scrollTo({ top: 0, behavior: 'smooth' })
                }
            >
                ↑
            </button>
            )}
            <Footer />
        </div>
    )
}

export default Explore;