import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="mt-4 shadow-[0_0_10px_rgba(0,0,3,0.2)] px-9 lg:w-[1000px] md:w-full rounded sticky top-0 z-50 bg-white dark:bg-gray-900">
      <div className="m-0 sm:px-6 flex items-center justify-between h-16">
        <div className="group flex text-2xl font-bold text-gray-800 dark:text-white">
            {"</RPLD>".split("").map((char, i) => (
                <span
                key={i}
                className="logo-text transition-transform duration-300 group-hover:translate-y-1 group-hover:rotate-[4deg] mx-[1px]"
                >
                {char}
                </span>
            ))}
        </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
            <Link href="/#about" className="logo-text text-[1.2rem] nav-link scroll={True} hover:underline">About Me</Link>
            <Link href="/#projects" className="logo-text text-[1.2rem] nav-link scroll={True} hover:underline">Projects</Link>
            <Link href="/#interest" className="logo-text text-[1.2rem] nav-link scroll={True} hover:underline">Side Interests</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 dark:text-white focus:outline-none">
                ☰
            </button>
            </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white dark:bg-gray-900">
          <Link href="/#about" onClick={toggleMenu} className="nav-link">About Me</Link>
          <Link href="/#projects" onClick={toggleMenu} className="nav-link">Projects</Link>
          <Link href="/#interest" onClick={toggleMenu} className="nav-link">Side Interests</Link>
        </div>
      )}
    </nav>
  );
}
