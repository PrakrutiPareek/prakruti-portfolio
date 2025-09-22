import { NavLink } from "react-router-dom";
import logo from "/Images/PrakrutiPareek_logo.png";
export default function Layout() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col items-center py-8 fixed">
      {/* Logo + Name */}
      <div className="flex flex-col items-center mb-10">
        <img
          src={logo}
          alt="Prakruti Logo"
          className="w-50 h-50 rounded-full mb-3 shadow-lg"
        />
        {/* <h1 className="text-xl font-bold text-sky-400">Prakruti Pareek</h1> */}
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-6 text-lg  self-start ml-8">
        <NavLink to="/" className="hover:text-sky-400">
          Home
        </NavLink>
        <NavLink to="/projects" className="hover:text-sky-400">
          Projects
        </NavLink>
        <NavLink to="/about" className="hover:text-sky-400">
          About
        </NavLink>
        <NavLink to="/contact" className="hover:text-sky-400">
          Contact
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="mt-auto text-sm text-gray-400">
        &copy; 2025 Prakruti Pareek
      </div>
    </div>
  );
}
