'use client';
import { getNoteById } from "@/lib/actions/note.actions";
import { useParams } from "next/navigation";
import { INote } from "@/lib/database/models/note.model";

async function Page() {
    const { noteId } = useParams();
    const noteInfo: INote = await getNoteById(noteId as string);

    return (
        <main className="flex items-center p-2 min-h-screen flex-col">
            <div className="container">
                <div className="p-4 bg-black/60 w-full rounded-md flex gap-4 text-white justify-between items-center">
                    <h1 className="font-extrabold text-white">{noteInfo.theme}</h1>

                    <p className="font-bold text-2xl">{new Date(noteInfo.date).toDateString()}</p>

                </div>
            </div>
        </main>
    )
}

export default Page