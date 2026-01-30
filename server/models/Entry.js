import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
    title: {type: String, required: true,},
    emotion: {type: String, required: true,},
    content: {type: String, required: true,},
    date: {type: Date, default: Date.now,},
});

const entryModel = mongoose.model('Entry', entrySchema);

export default entryModel;