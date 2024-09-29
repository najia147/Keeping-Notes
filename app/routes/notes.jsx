import { json, redirect } from '@remix-run/node';

import NewNote from '../components/newNote';
import NoteList from '../components/NoteList';
import { getStoredNotes, storeNotes } from '../data/notes';
import { Link, useCatch, useLoaderData } from '@remix-run/react';
import { resolve } from 'eslint-import-resolver-typescript';

export default function NotePage() {
  const notes = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList notes={notes}/>
    </main>
  )
}

export async function loader() {
  const notes = await getStoredNotes();
  if(!notes || notes.length === 0) {
    throw json(
      {message: 'Could not find any notes.'},
      {
        status: 404,
        statusText: 'Not Found'
      }
    )
  }
  return notes;
}

export async function action({request}) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  if (noteData.title.trim().length < 5) {
    return {message: 'Invalid title - must be at least 5 characters long.'}
  }

  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))
  return redirect('/notes');
}

export function CatchBoundary() {
  const caughtResponse = useCatch();

  const message = caughtResponse.data?.message || 'Data Not Found.'
  return (
  <main>
    <p>{message}</p>
  </main>
  );
}

export function ErrorBoundary({error}) {
  return (
     <main className="flex-grow flex flex-col justify-center  items-center px-4 py-8 bg-gray-50 text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">An error related to your notes occured!</h1>
          <p className="text-lg text-gray-700 mb-4">{error.message}</p>
          <p className="text-lg text-blue-500">
            Back to <Link to="/" className="text-blue-600 underline">Safety</Link>!
          </p>
        </main>
  )
}