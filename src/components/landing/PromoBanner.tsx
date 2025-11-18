'use client';

import { useState, useEffect } from 'react';

const PromoBanner = () => {
  const [words, setWords] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    
    const initialWords = [`HOJE ${formattedDate}`, "NESSA PÁGINA"];
    setWords(initialWords);
    setCurrentWord(initialWords[0]);
  }, []);
  
  useEffect(() => {
    if (words.length === 0) return;
    
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words]);

  useEffect(() => {
    if (words.length > 0) {
      setCurrentWord(words[index]);
    }
  }, [index, words]);

  if (!currentWord) {
    return (
        <div className="bg-white text-center py-3 z-20 relative h-[44px]">
        </div>
    );
  }

  return (
    <div className="bg-white text-center py-3 z-20 relative">
      <p className="font-headline text-brand-dark-blue font-bold text-lg md:text-xl flex justify-center items-center">
        <span>DESCONTO SÓ&nbsp;</span>
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
