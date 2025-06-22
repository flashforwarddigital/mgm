import React, { useState, useEffect, useRef } from 'react';

interface DecryptingTextProps {
  titles: string[];
  className?: string;
  style?: React.CSSProperties;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
const ANIMATION_SPEED = 50; // milliseconds per frame
const REVEAL_SPEED = 3; // characters revealed per frame
const TITLE_DISPLAY_TIME = 3500; // time to display each title

export const DecryptingText: React.FC<DecryptingTextProps> = ({ 
  titles, 
  className = "", 
  style = {} 
}) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<NodeJS.Timeout>();
  const titleTimeoutRef = useRef<NodeJS.Timeout>();

  const currentTitle = titles[currentTitleIndex];

  const scrambleText = (targetText: string, revealedCount: number) => {
    return targetText
      .split('')
      .map((char, index) => {
        if (index < revealedCount) {
          return char; // Already revealed
        }
        if (char === ' ') {
          return ' '; // Keep spaces
        }
        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
      })
      .join('');
  };

  const animateToTitle = (targetTitle: string) => {
    setIsAnimating(true);
    let revealedCount = 0;
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      
      // Reveal characters gradually
      if (frameCount % Math.ceil(ANIMATION_SPEED / REVEAL_SPEED) === 0) {
        revealedCount = Math.min(revealedCount + 1, targetTitle.length);
      }

      const scrambled = scrambleText(targetTitle, revealedCount);
      setDisplayText(scrambled);

      if (revealedCount < targetTitle.length) {
        animationRef.current = setTimeout(animate, ANIMATION_SPEED);
      } else {
        setIsAnimating(false);
        // Schedule next title change
        titleTimeoutRef.current = setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, TITLE_DISPLAY_TIME);
      }
    };

    animate();
  };

  useEffect(() => {
    // Clear existing timeouts
    if (animationRef.current) clearTimeout(animationRef.current);
    if (titleTimeoutRef.current) clearTimeout(titleTimeoutRef.current);

    // Start animation for current title
    animateToTitle(currentTitle);

    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
      if (titleTimeoutRef.current) clearTimeout(titleTimeoutRef.current);
    };
  }, [currentTitleIndex]);

  return (
    <div className={`font-mono ${className}`} style={style}>
      {displayText}
    </div>
  );
};