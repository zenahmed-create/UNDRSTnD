// /app/components/TestimonialsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    quote:
      "Notion has revolutionized the way our team collaborates. It's an indispensable tool for our daily operations.",
  },
  {
    name: 'Sarah Lee',
    role: 'Creative Director',
    company: 'DesignHub',
    quote:
      "As a creative professional, I love how flexible Notion is. It adapts to my workflow, not the other way around.",
  },
  {
    name: 'Michael Chen',
    role: 'Startup Founder',
    company: 'InnovateCo',
    quote:
      "Notion has been crucial in keeping our small team organized and aligned. It's like a Swiss Army knife for productivity.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What people are saying about Undrstnd
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              "This app is fuego 🔥 🔥 🔥. I can quickly get up to speed with this app when onboarding to new projects and initiatives."
            </p>
            <p className="font-semibold mb-2">Muhammad Zubair, Senior Software Engineer at TechCorp</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={20} />
              ))}
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              "Super slick app ... does exactly what it supposed to. Really helpful when Apple's built-in "look up" feature is unable to get the full context of an article. I can see this being super helpful for students trying to understand lengthy articles and how a specific terms play in with the greater article.."
            </p>
            <p className="font-semibold mb-2">Mustafa Hoda, Implementation Engineer at Adyen</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={20} />
              ))}
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 mb-4">
              "Undrstnd's flexibility allows us to adapt quickly to changing project needs."
            </p>
            <p className="font-semibold mb-2">Emily Brown, Team Lead at AgileStudio</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={20} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
