'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  text?: string;
  textColor?: string;
  fontSize?: number;
  className?: string;
}

export default function Logo({
  text = 'OnlineLoans.org',
  textColor = 'var(--color-primary)',
  fontSize,
  className = '',
}: LogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Trigger animation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!logoRef.current) return;

    const logoElement = logoRef.current;
    
    // Reset
    logoElement.innerHTML = '';
    // Reset completion state asynchronously to avoid cascading renders
    requestAnimationFrame(() => {
      setIsComplete(false);
    });

    // Reset font to cursive for the animation
    logoElement.style.fontFamily = 'Playwrite CU, cursive';
    logoElement.style.fontStyle = 'normal';

    const letters = text.split('');
    // Find where "org" starts in the text
    const orgIndex = text.toLowerCase().indexOf('org');
    const orgStartIndex = orgIndex !== -1 ? orgIndex : -1;
    const orgEndIndex = orgStartIndex !== -1 ? orgStartIndex + 3 : -1;

    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.className = styles.letter;
      span.textContent = letter;
      span.style.animationDelay = `${index * 0.08}s`;
      
      // Apply green color to "org" part
      if (orgStartIndex !== -1 && index >= orgStartIndex && index < orgEndIndex) {
        span.className = `${styles.letter} ${styles.orgLetter}`;
      }
      
      logoElement.appendChild(span);
    });

    // Calculate when the last letter finishes animating
    const lastLetterStart = (letters.length - 1) * 0.08;
    const animationDuration = 0.15;
    const animationCompleteTime = lastLetterStart + animationDuration + 0.05;
    const waitTime = 0.8; // Wait time after animation completes before pop
    const totalDuration = animationCompleteTime + waitTime;

    const timeout = setTimeout(() => {
      setIsComplete(true);
      logoElement.style.fontFamily = 'Poppins';
      logoElement.style.fontStyle = 'normal';
    }, totalDuration * 1000);

    return () => clearTimeout(timeout);
  }, [text, animationKey]);

  useEffect(() => {
    // Load fonts dynamically (only once)
    if (typeof document !== 'undefined') {
      const existingLinks = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
      const hasPlaywrite = existingLinks.some(link => 
        link.getAttribute('href')?.includes('Playwrite+CU')
      );
      const hasPoppins = existingLinks.some(link => 
        link.getAttribute('href')?.includes('Poppins')
      );

      if (!hasPlaywrite) {
        const link1 = document.createElement('link');
        link1.href = 'https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap';
        link1.rel = 'stylesheet';
        document.head.appendChild(link1);
      }

      if (!hasPoppins) {
        const link2 = document.createElement('link');
        link2.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
        link2.rel = 'stylesheet';
        document.head.appendChild(link2);
      }
    }
  }, []);

  return (
    <div className={`${styles.logoContainer} ${className}`}>
      <div
        ref={logoRef}
        className={`${styles.logoText} ${isComplete ? styles.complete : ''}`}
        style={{
          color: textColor,
          ...(fontSize && { fontSize: `${fontSize}px` }),
          fontFamily: 'Playwrite CU, cursive',
        }}
      />
    </div>
  );
}

