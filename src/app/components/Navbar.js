"use client";

import { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import the context

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen, handleLogout }) {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        <a className="text-xl font-semibold" href="/">LOGO</a>
      </div>
      <div className="flex flex-col ml-4">
        <a className="text-xl font-medium my-4" href="/about" onClick={() => setOpen(!open)}>About</a>
        <a className="text-xl font-normal my-4" href="/contact" onClick={() => setOpen(!open)}>Contact</a>
        {handleLogout ? (
          <a className="text-xl font-normal my-4" onClick={handleLogout}>Log Out</a>
        ) : (
          <>
            <a className="text-xl font-normal my-4" href="/login" onClick={() => setOpen(!open)}>Login</a>
            <a className="text-xl font-normal my-4" href="/register" onClick={() => setOpen(!open)}>Register</a>
          </>
        )}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth(); // Get the auth state and logout function

  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} handleLogout={logout} />
      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold" href="/">LOGO</a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => setOpen(!open)}>
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-3.5' : ''}`} />
          <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? 'w-0' : 'w-full'}`} />
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-3.5' : ''}`} />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          {isLoggedIn ? (
            <a onClick={logout} className="mx-4 cursor-pointer">Log Out</a>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
