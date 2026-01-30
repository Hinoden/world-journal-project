import {useState} from 'react';
import { Snackbar, Alert } from "@mui/material";
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
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");


    const today = new Date().toISOString().split('T')[0];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !emotion || !content) {
            setSnackbarMessage("Please fill in all fields");
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
            return;
        }
        const entryData = {
            title,
            emotion,
            content,
        };

        fetch('http://localhost:5000/api/entries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entryData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            // Clear form fields after successful submission
            setTitle('');
            setEmotion('');
            setContent('');
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        setSnackbarMessage("Thanks for your submission!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        setTitle("");
        setEmotion("");
        setContent("");
    }

    return (
        <div className="submit-page">
            <Navbar />
            <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={() => setSnackbarOpen(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setSnackbarOpen(false)}
                    severity={snackbarSeverity}
                    sx={{ width: "100%" }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
            <div className="submit-container">
                <h1 className="submit-title">Submit Your Journal Entry</h1>
                <p className="submit-desc">How was your day? Share your journal entry with us by filling out the form below.</p>
                <div className="submit-form">
                    <Card
                        sx={{
                            maxWidth: 600,
                            minWidth: 100,
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
                                <Button variant="contained" onClick={handleSubmit}>
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