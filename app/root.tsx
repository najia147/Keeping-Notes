import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

import MainNavigation from '../app/components/MainNavigation';

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

// export function ErrorBoundary({ error }) {
//   return (
//     <html lang="en" className="bg-gray-100 h-full">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <Meta />
//         <Links />
//         <title>An error occurred!</title>
//       </head>
//       <body className="flex flex-col min-h-screen">
//         <header className="bg-white shadow-md py-4 px-6">
//           <MainNavigation />
//         </header>
//         <main className="flex-grow flex flex-col justify-center items-center px-4 py-8 bg-gray-50 text-center">
//           <h1 className="text-4xl font-bold text-red-600 mb-4">An error occurred!</h1>
//           <p className="text-lg text-gray-700 mb-4">{error.message}</p>
//           <p className="text-lg text-blue-500">
//             Back to <Link to="/" className="text-blue-600 underline">Safety</Link>!
//           </p>
//         </main>
//         <ScrollRestoration />
//         <Scripts />
//       </body>
//     </html>
//   );
// }

