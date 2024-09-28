export default function NewNote() {
  return (
    <form
      method="post"
      className="max-w-md mx-auto bg-white p-6 mt-10 rounded-md shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Create a New Note
      </h2>
      <p className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 font-semibold mb-2"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </p>
      <p className="mb-4">
        <label
          htmlFor="content"
          className="block text-gray-700 font-semibold mb-2"
        >
          Content
        </label>
        <textarea
          name="content"
          id="content"
          required
          className="w-full h-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </p>
      <div className="text-right">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
        >
          Add Note
        </button>
      </div>
    </form>
  );
}
