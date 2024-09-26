// /app/components/TestimonialsSection.tsx
'use client';

import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What people are saying about UNDRSTnD
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="mt-3 text-base text-gray-500">
              &ldquo;This app is fuego &hellip; I can quickly get up to speed with this app when onboarding to new projects and initiatives.&rdquo;
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
            <p className="mt-3 text-base text-gray-500">
              &ldquo;Super slick app &hellip; does exactly what it&apos;s supposed to. Really helpful when Apple&apos;s built-in &ldquo;look up&rdquo; feature is unable to get the full context of an article. I can see this being super helpful for students trying to understand lengthy articles and how a specific terms play in with the greater article.&rdquo;
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
            <p className="mt-3 text-base text-gray-500">
              &ldquo;Undrstnd&apos;s flexibility allows us to adapt quickly to changing project needs.&rdquo;
            </p>
            <p className="font-semibold mb-2">Emily Brown, Team Lead at InnovateCo</p>
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
