import { NavLink } from "@remix-run/react";

export default function MainNavigation() {
  return (
    <nav className="bg-gray-100 p-4 shadow-md">
      <ul className="flex space-x-6 justify-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-blue-600 px-4 py-2 rounded-md"
                : "text-gray-300 hover:text-white px-4 py-2 rounded-md transition"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/notes"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-blue-600 px-4 py-2 rounded-md"
                : "text-gray-300 hover:text-white px-4 py-2 rounded-md transition"
            }
          >
            My Notes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
