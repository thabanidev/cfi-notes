import { INote } from '@/lib/database/models/note.model';
import Link from 'next/link';
import React from 'react';
import { FaYoutube, FaReadme } from 'react-icons/fa6';

// export interface INote extends Document {
//   _id: string;
//   date: Date;
//   theme: string;
//   preacher: string;
//   verses: string[];
//   points: string[];
//   url?: string;
// }


function Card(note: INote) {
  // Get the first three verses
  const firstThreeVerses = note.verses.slice(0, 3);

  return (
    <div className='bg-black/60 rounded-lg shadow text-white'>
      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <p className='text-lg text-white font-semibold pb-1 pe-2 border-red-500 border-b-4 w-max mb-2'>{note.preacher}</p>
          <p className='text-md text-white font-semibold pb-4'>{new Date(note.date).toDateString()}</p>
        </div>
        <h3 className='text-xl font-bold mb-2 text-white/90'>{note.theme}</h3>
        <div className='flex gap-2 flex-wrap'>
          {firstThreeVerses.map((verse, index) => (
            <p key={index} className='bg-red-500 text-white py-1 px-2 rounded-md '>{verse}</p>
          ))}
        </div>

        <div className='flex justify-end gap-2 mt-4'>
          {note.url && <Link href={note.url} className='flex gap-2 items-center text-slate-200 hover:text-slate-100'>
            <FaYoutube />
            Watch
          </Link>}
          <Link href={`/notes/${note._id}`} className='flex gap-2 items-center text-lg text-white justify-end hover:text-red-500 transition'>
            <FaReadme />
            Read
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
