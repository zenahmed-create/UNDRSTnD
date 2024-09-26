// /app/components/HeroSection.tsx

import { ChevronRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20 text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">Read, click, understand.</h1>
      <h2 className="text-2xl md:text-3xl text-gray-600 mb-12">
        UNDRSTnD and Ben help you feel smart by making you that way.
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
        <a
          href="https://chromewebstore.google.com/detail/contextual-term-explorer/jckkhbhfmmlpbfnapjkofppliobejoii"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-4 rounded-md text-base font-medium hover:from-gray-800 hover:to-gray-700 inline-flex items-center justify-between w-64 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 group"
        >
          <span className="text-left leading-tight">
            Download Chrome<br />Extension
          </span>
          <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a
          href="#" // Replace with actual Safari extension link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-4 rounded-md text-base font-medium hover:from-gray-800 hover:to-gray-700 inline-flex items-center justify-between w-64 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 group"
        >
          <span className="text-left leading-tight">
            Download Safari<br />Extension
          </span>
          <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
      <div className="max-w-4xl mx-auto relative">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=720&width=1280"
            alt="Product demo video placeholder"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white bg-opacity-75 rounded-full p-4 text-gray-900 hover:bg-opacity-100 transition-all duration-300">
              <Play className="w-12 h-12" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
