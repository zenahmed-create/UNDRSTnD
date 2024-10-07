// /app/components/CompanyLogosSection.tsx
'use client'

import { useState, useEffect, useRef } from 'react';
import styles from './CompanyLogosSection.module.css';

interface UseCase {
  front: string;
  back: string;
}

export default function PopularUseCasesSection() {
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false, false]);
  const timeoutRefs = useRef<(NodeJS.Timeout | null)[]>([null, null, null, null]);

  const useCases: UseCase[] = [
    {
      front: "Master new concepts quickly",
      back: "Ben breaks down difficult concepts into easy-to-understand explanations."
    },
    {
      front: "Enhance reading comprehension",
      back: "Ben improves your understanding of texts with contextualized summaries and insights."
    },
    {
      front: "Instant insights from real-time browsing",
      back: "Gain instant insights with Ben on any webpage in real-time without leaving the site."
    },
    {
      front: "Boost productivity while learning",
      back: "Ben keeps you focused while you power through your learning."
    }
  ];

  const handleCardClick = (index: number) => {
    setFlippedCards(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });

    if (timeoutRefs.current[index]) {
      clearTimeout(timeoutRefs.current[index]!);
    }

    if (!flippedCards[index]) {
      timeoutRefs.current[index] = setTimeout(() => {
        setFlippedCards(prev => {
          const newState = [...prev];
          newState[index] = false;
          return newState;
        });
      }, 3500);
    }
  };

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Click a tile to learn how Ben can help you</h3>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div 
                  key={index} 
                  className={`${styles.flipCard} cursor-pointer`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className={`${styles.flipCardInner} ${flippedCards[index] ? styles.flipped : ''}`}>
                    <div className={`${styles.flipCardFront} ${styles.cardFace}`}>
                      <p className={styles.cardText}>
                        {useCase.front}
                      </p>
                    </div>
                    <div className={`${styles.flipCardBack} ${styles.cardFace}`}>
                      <p className={styles.cardText}>
                        {useCase.back}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className={`${styles.imageContainer} bg-white rounded-2xl shadow-lg overflow-hidden`}>
              <div className={styles.imageWrapper}>
                <img
                  src="/CompanyLogoSection.png"
                  alt="Popular use cases illustration"
                  className={`${styles.image} object-cover`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
