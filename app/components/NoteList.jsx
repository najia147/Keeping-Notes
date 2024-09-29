function NoteList({ notes }) {
  return (
    <ul
      id="note-list"
      className={`grid gap-2 justify-items-center mt-10 ${
        notes.length === 1
          ? 'justify-center'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      }`}
    >
      {notes.map((note, index) => (
        <li
          key={note.id}
          className="note bg-gray-100 shadow-md rounded-lg p-4 w-80 flex flex-col justify-center"
        >
          <article>
            <header>
              <ul className="note-meta flex space-x-4 text-sm text-gray-500 justify-center">
                <li>#{index + 1}</li>
                <li>
                  <time dateTime={note.id}>
                    {new Date(note.id).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </time>
                </li>
              </ul>
              <h2 className="mt-2 text-xl font-semibold text-gray-800 text-center">
                {note.title}
              </h2>
            </header>
           <p className="mt-4 text-gray-700 text-center">{note.content}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
