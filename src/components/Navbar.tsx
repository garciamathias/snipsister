'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="font-playfair text-2xl">
            Snip Sister
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/#about" className="nav-link">
              About
            </Link>
            <Link href="/#gallery" className="nav-link">
              Gallery
            </Link>
            <Link href="/#hours" className="nav-link">
              Hours
            </Link>
            <a 
              href="https://snipsisterhairsalon.square.site"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-textColor"></span>
              <span className="block w-8 h-0.5 bg-textColor"></span>
              <span className="block w-8 h-0.5 bg-textColor"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#about" 
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/#gallery" 
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/#hours" 
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Hours
            </Link>
            <a 
              href="https://snipsisterhairsalon.square.site"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-primary inline-block text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 