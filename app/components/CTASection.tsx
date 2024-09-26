'use client';// /app/components/CTASection.tsx

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import NewsletterSignupForm from './NewsletterSignupForm';

export default function CTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to get started?</h3>
        <p className="text-xl text-gray-600 mb-8">
          Join a community people who get smarter with UNDRSTnD.
        </p>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-gray-900 text-white px-8 py-4 rounded-md text-lg hover:bg-gray-800 inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105"
        >
          Join the newsletter community <ChevronRight className="ml-2" />
        </button>
      </div>
      {isFormOpen && <NewsletterSignupForm onClose={() => setIsFormOpen(false)} />}
    </section>
  );
}
