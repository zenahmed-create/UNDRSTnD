// /app/components/Header.tsx
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-gray-900">
              UNDRSTnD
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && <MobileMenu />}
    </>
  );
}

