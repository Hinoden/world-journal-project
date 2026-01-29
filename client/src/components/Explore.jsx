import react from 'react';
import '../styles/Explore.css';
import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box
} from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

function Explore() {
    const [emotion, setEmotion] = useState('');
    const [date, setDate] = useState('');
    const [search, setSearch] = useState('');
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
                        InputLabelProps={{ shrink: true}}
                    />
                </Box>
                <div className="explore-entries">
                    {/* Journal entries will be displayed here */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Explore;