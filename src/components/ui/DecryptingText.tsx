import React, { useState, useEffect, useRef } from 'react';

interface DecryptingTextProps {
  titles: string[];
  className?: string;
  style?: React.CSSProperties;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
const ANIMATION_SPEED = 30; // milliseconds per frame (faster)
const REVEAL_SPEED = 4; // characters revealed per frame (faster reveal)
const TITLE_DISPLAY_TIME = 5000; // 5 seconds to display each title
const TRANSITION_TIME = 2000; // 2 seconds for transition animation

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
    
    // Calculate how many frames the transition should take
    const totalFrames = Math.ceil(TRANSITION_TIME / ANIMATION_SPEED);
    const revealRate = Math.ceil(targetTitle.length / totalFrames);

    const animate = () => {
      frameCount++;
      
      // Reveal characters more aggressively to fit within 2 seconds
      revealedCount = Math.min(
        revealedCount + revealRate, 
        targetTitle.length
      );

      const scrambled = scrambleText(targetTitle, revealedCount);
      setDisplayText(scrambled);

      if (revealedCount < targetTitle.length) {
        animationRef.current = setTimeout(animate, ANIMATION_SPEED);
      } else {
        setIsAnimating(false);
        // Schedule next title change after 5 seconds
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