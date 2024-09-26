// /app/components/MobileMenu.tsx
'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function MobileMenu() {
  return (
    <div className="fixed inset-0 bg-white z-40 pt-20">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <nav className="flex flex-col items-start space-y-8 py-8 pl-4 sm:pl-6 lg:pl-8 xl:pl-12">
          <a 
            href="https://chromewebstore.google.com/detail/contextual-term-explorer/jckkhbhfmmlpbfnapjkofppliobejoii"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-3 rounded-md text-xl"
          >
            Get Undrstnd free
          </a>
        </nav>
      </div>
    </div>
  );
}
