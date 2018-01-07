import mongoose, { Schema } from 'mongoose';

var codeSchema = new Schema({
    terminal: String,
    date: String,
    location: {
        id: String,
        category: {
            id: String,
            codes: []
        }
    }
});

export default mongoose.model('code', codeSchema);