import Link from "next/link";
import { FaNotesMedical, FaRegNoteSticky } from "react-icons/fa6";
import Card from "@/components/Card";
import { getAllNotes } from "@/lib/actions/note.actions";
import { INote } from "@/lib/database/models/note.model";

export default async function Home() {
  
  const notes : INote[] = await getAllNotes();

  return (
    <main className="flex items-center p-2 min-h-screen flex-col">
      <div className="container">
        <h1 className="flex gap-2 p-2 justify-center items-center font-extrabold mb-5 text-4xl md:text-5xl text-white"><FaRegNoteSticky /> CFI Notes</h1>
        <div className="p-4 bg-black/60 w-full rounded-md flex gap-4 text-white justify-between items-center">
          <p className="text-lg bg-red-500 p-2 rounded-md">
            {
              new Date(Date.now()).toDateString()
            }
          </p>
          <Link href="/new" className="flex hover:text-red-500 cursor-pointer gap-2 justify-center items-center">
            <FaNotesMedical size={36} className="text-2xl sm:text4xl transition" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {
            notes.map((note, index) => (
              <Card key={index} {...note} />
            ))
          }
        </div>
      </div>
    </main>
  );
}
