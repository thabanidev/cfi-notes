import { Schema, model,  models } from "mongoose";

export interface INote extends Document {
    _id: string;
    date: Date;
    theme: string;
    preacher: string;
    verses: string[];
    points: string[];
    url?: string;
}

const NoteSchema = new Schema({
    date: { type: Date, default: Date.now },
    theme: { type: String, required: true},
    preacher: { type: String, required: true},
    verses: { type: [], required: true},
    points: { type: [], required: true},
    url: { type: String},
});

const Note = models.Note || model("Note", NoteSchema);

export default Note;