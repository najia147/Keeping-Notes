import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main
      id="content"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6"
    >
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        A better way of keeping track of your notes
      </h1>
      <p className="text-lg text-center text-gray-600 mb-4">
        Try our early beta and never lose track of your notes again!
      </p>
      <p id="cta">
        <Link
          to="/notes"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
        >
          Try Now!
        </Link>
      </p>
    </main>
  );
}
