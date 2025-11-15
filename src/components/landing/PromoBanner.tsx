'use client';

import { useState, useEffect } from 'react';

const words = ["HOJE", "NESSA PÁGINA"];

const PromoBanner = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentWord(words[index]);
  }, [index]);

  return (
    <div className="bg-white text-center py-3 z-20 relative">
      <p className="font-headline text-brand-dark-blue font-bold text-base md:text-lg">
        DESCONTO SÓ{" "}
        <span className="inline-block relative">
          <span
            key={currentWord}
            className="typing-animation text-brand-orange underline decoration-wavy"
          >
            {currentWord}
          </span>
        </span>
      </p>
    </div>
  );
};

export default PromoBanner;
