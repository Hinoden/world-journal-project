import react from 'react';
import {useState} from 'react';
import '../styles/Submit.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {
    Card,
    CardContent,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    Button,
    Typography
} from '@mui/material';

function Submit() {
    const [title, setTitle] = useState('');
    const [emotion, setEmotion] = useState('');
    const [content, setContent] = useState('');

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="submit-page">
            <Navbar />
            <div className="submit-container">
                <h1 className="submit-title">Submit Your Journal Entry</h1>
                <p className="submit-desc">How was your day? Share your journal entry with us by filling out the form below.</p>
                <div className="submit-form">
                    <Card
                        sx={{
                            maxWidth: 600,
                            minWidth: 600,
                            margin: '0 auto',
                            borderRadius: 3,
                            boxShadow: 3,
                        }}
                    >
                        <CardContent>
                            {/* Title */}
                            <TextField
                            placeholder="Title"
                            variant="standard"
                            fullWidth
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            slotProps={{
                                disableUnderline: true,
                                sx: { fontSize: 20, fontWeight: 'bold' },
                            }}
                            />

                            {/* Date */}
                            <TextField
                            type="date"
                            variant="standard"
                            fullWidth
                            value={today}
                            slotProps={{
                                input: { readOnly: true },
                                disableUnderline: true
                            }}
                            />

                            {/* Content */}
                            <TextField
                            placeholder="Write your journal entry..."
                            multiline
                            minRows={6}
                            fullWidth
                            variant="standard"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            slotProps={{
                                disableUnderline: true,
                            }}
                            />


                            
                            {/* Emotion Dropdown */}
                            <Box mt={2} mb={2} display="flex" alignItems="center" gap={1}>
                                <Typography variant="body1">
                                    Feeling:
                                </Typography>
                                <FormControl size="small" sx={{ minWidth: 160 }}>
                                    <InputLabel id="emotion-label">Emotion</InputLabel>
                                    <Select
                                    labelId="emotion-label"
                                    value={emotion}
                                    label="Emotion"
                                    onChange={(e) => setEmotion(e.target.value)}
                                    >
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value="happy">Happy</MenuItem>
                                    <MenuItem value="sad">Sad</MenuItem>
                                    <MenuItem value="excited">Excited</MenuItem>
                                    <MenuItem value="anxious">Anxious</MenuItem>
                                    <MenuItem value="angry">Angry</MenuItem>
                                    <MenuItem value="bored">Bored</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            {/* Submit */}
                            <Box mt={3} textAlign="right">
                                <Button variant="contained">
                                    Submit
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Submit;