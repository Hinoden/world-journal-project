import express from 'express';
import Entry from '../models/Entry.js';

const router = express.Router();

// Create a new journal entry
router.post('/', async (req, res) => {
    try {
        const entry = new Entry(req.body);
        const savedEntry = await entry.save();
        res.status(201).json(savedEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all journal entries
router.get('/', async (req, res) => {
    try {
        const entries = await Entry.find().sort({ date: -1 });
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;