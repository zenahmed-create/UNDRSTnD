'use client'
import Image from 'next/image';
import { useState } from 'react';

const steps = [
  {
    title: 'Step 1',
    content: 'While reading any piece of online content, highlight any word or sentence to activate Ben',
    image: '/howitworksimage1.png',
  },
  {
    title: 'Step 2',
    content: 'Right click and select "Ask Ben" to provide a contextualized meaning for the highlighted text',
    image: '/howitworksimage2.png',
  },
  {
    title: 'Step 3',
    content: 'Receive back a personalized popup with the meaning of the highlighted text',
    image: '/howitworksimage3.png',
  },
];

export default function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How To Use Ben</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 sm:h-56 md:h-64 mb-4">
                <Image
                  src={step.image}
                  alt={step.title}
                  layout="fill"
                  objectFit="contain"
                  className="transition-opacity duration-300 p-4"
                  style={{ opacity: hoveredIndex === index ? 0.8 : 1 }}
                />
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}