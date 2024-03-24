import { connectToDB } from "../database";
import Note from "../database/models/note.model";
import { INote } from "../database/models/note.model";

export async function createNote(note: INote) {
    try {
        await connectToDB();
        const newNote = new Note({
            ...note,
        });
        await newNote.save();
        return JSON.parse(JSON.stringify(newNote));
    } catch (error) {
        throw new Error(String(error));
    }
}

export async function getNoteById(noteId: string) {
    try {
        await connectToDB();
        const note = await Note.findById(noteId);
        return JSON.parse(JSON.stringify(note));
    }
    catch (error) {
        throw new Error(String(error));
    }
}

export async function getAllNotes() {
    try {
        await connectToDB();
        const notes = await Note.find().sort({ date: "desc"});
        return JSON.parse(JSON.stringify(notes));
    } catch (error) {
        throw new Error(String(error));
    }
}

