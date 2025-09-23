import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/Images/PrakrutiPareek_logo.png";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="w-64 bg-gray-900 text-white min-h-screen flex-col items-center py-8 fixed hidden md:flex">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <img
            src={logo}
            alt="Prakruti Logo"
            className="w-24 h-24 rounded-full mb-3 shadow-lg object-cover"
          />
          <h1 className="text-2xl font-bold text-sky-400">Prakruti Pareek</h1>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-6 text-lg self-start ml-8">
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
        <div className="mt-auto text-sm text-gray-400 px-4 text-center">
          &copy; {new Date().getFullYear()} Prakruti Pareek
          <div className="mt-2 text-xs text-gray-400 text-center">
            Built with React, Tailwind CSS, and enhanced with AI-assisted
            guidance for responsive design and project structuring.
          </div>
        </div>
      </div>

      {/* Mobile Topbar */}
      <div className="bg-gray-900 text-white flex md:hidden justify-between items-center px-6 py-4 fixed w-full z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-bold text-sky-400">Prakruti Pareek</span>
        </div>

        {/* Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="bg-gray-800 text-white flex flex-col items-center gap-6 py-12 fixed top-16 left-0 w-full z-40">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-sky-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-sky-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-sky-400"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-sky-400"
          >
            Contact
          </NavLink>
        </div>
      )}
    </>
  );
}
