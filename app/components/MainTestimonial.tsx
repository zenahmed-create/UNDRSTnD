import React from 'react';
import Image from 'next/image';

interface MainTestimonialProps {
  quote?: string;
  author?: string;
  role?: string;
  avatarSrc?: string;
}

const MainTestimonial: React.FC<MainTestimonialProps> = ({
  quote = "I created Ben so that I could learn things fast without having to open new tabs, copy and paste what I was reading into Google, or write long 'Help me Understand' prompts in ChatGPT. I was brand new to payments when I started at Ayden. If I had this tool, I would have onboarded much faster!",
  author = "Zen Ahmed",
  role = "Founder, UNDRSTnD",
  avatarSrc = "/testimonial2.png"
}) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl font-semibold text-gray-900 mb-8">
            "{quote}"
          </blockquote>
          <div className="flex items-center justify-center">
            <Image
              src={avatarSrc}
              alt={author}
              width={64}
              height={64}
              className="rounded-full mr-4"
            />
            <div className="text-left">
              <p className="font-semibold text-gray-900">{author}</p>
              <p className="text-gray-600">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTestimonial;