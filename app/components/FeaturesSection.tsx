// /app/components/FeaturesSection.tsx
'use client';

import React from 'react';

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why learners choose to understand with Ben
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Meanings with context</h3>
            <p className="text-gray-600">
              Ben helps you understand the meaning of words and phrases in context
            </p>
          </div>
          {/* Feature 2 */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Intuitive interface</h3>
            <p className="text-gray-600">
              Ben is designed to be easy to interact with
            </p>
          </div>
          {/* Feature 3 */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Single word and multi-word phrases</h3>
            <p className="text-gray-600">
              Ben supports single word and multi-word phrases
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
