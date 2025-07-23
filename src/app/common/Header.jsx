'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import logoimg from '../../../public/images/logo.png'; // Adjust the path as necessary

const navItems = [
  { label: "Home", hasDropdown: true },
  { label: "About" },
  { label: "Services", hasDropdown: true },
  { label: "Projects", hasDropdown: true },
  { label: "Blogs", hasDropdown: true },
  { label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-sm py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2 flex-1">
          <Image src={logoimg} alt="Luzon Logo" width={150} height={70} />
          <span className="text-xl font-semibold text-gray-900"></span>
        </div>

        {/* Center: Desktop Menu (Right Aligned) */}
        <ul className="hidden md:flex justify-end flex-1 space-x-6 text-sm font-medium text-gray-800">
          {navItems.map((item) => (
            <li key={item.label} className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              <Link href={`/${item.label.toLowerCase()}`} className="flex items-center gap-1 hover:text-blue-600">
                {item.label}
                {item.hasDropdown && <span className="text-xs">▾</span>}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Mobile Hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-2 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={`/${item.label.toLowerCase()}`}
              className="block text-gray-800 font-medium hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
