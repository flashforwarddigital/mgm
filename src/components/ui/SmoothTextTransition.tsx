import React, { useState, useEffect, useRef } from 'react';

interface SmoothTextTransitionProps {
  titles: string[];
  className?: string;
  style?: React.CSSProperties;
  effect?: 'typewriter' | 'fade' | 'slide' | 'morphCharacter';
}

const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
const PAUSE_TIME = 3000; // 3 seconds pause between titles
const MORPH_DURATION = 2000; // 2 seconds for morphing

export const SmoothTextTransition: React.FC<SmoothTextTransitionProps> = ({ 
  titles, 
  className = "", 
  style = {},
  effect = 'morphCharacter'
}) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const formatTitle = (title: string) => {
    return title.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  };

  const getRandomChar = () => {
    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  };

  const morphCharacterEffect = () => {
    const currentTitle = formatTitle(titles[currentTitleIndex]);
    const nextTitle = formatTitle(titles[(currentTitleIndex + 1) % titles.length]);
    
    setIsAnimating(true);
    
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / MORPH_DURATION, 1);
      
      const maxLength = Math.max(currentTitle.length, nextTitle.length);
      let result = '';
      
      for (let i = 0; i < maxLength; i++) {
        const currentChar = currentTitle[i] || '';
        const nextChar = nextTitle[i] || '';
        
        if (currentChar === nextChar) {
          // Same character, keep it
          result += currentChar;
        } else if (currentChar === ' ' || nextChar === ' ') {
          // Handle spaces
          if (progress > 0.5) {
            result += nextChar;
          } else {
            result += currentChar;
          }
        } else if (progress < 0.3) {
          // Early phase: keep current character
          result += currentChar;
        } else if (progress < 0.7) {
          // Middle phase: random scrambling
          result += getRandomChar();
        } else {
          // Late phase: transition to next character
          const transitionProgress = (progress - 0.7) / 0.3;
          if (Math.random() < transitionProgress) {
            result += nextChar;
          } else {
            result += getRandomChar();
          }
        }
      }
      
      setDisplayText(result);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        setDisplayText(nextTitle);
        setIsAnimating(false);
        
        // Schedule next title change
        timeoutRef.current = setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, PAUSE_TIME);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Clear existing animations
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!isAnimating) {
      // Start with current title displayed
      const currentTitle = formatTitle(titles[currentTitleIndex]);
      setDisplayText(currentTitle);
      
      // Schedule next animation
      timeoutRef.current = setTimeout(() => {
        morphCharacterEffect();
      }, PAUSE_TIME);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentTitleIndex, titles]);

  // Initialize with first title
  useEffect(() => {
    if (titles.length > 0) {
      setDisplayText(formatTitle(titles[0]));
    }
  }, [titles]);

  return (
    <div className={className} style={style}>
      {displayText || formatTitle(titles[0] || '')}
    </div>
  );
};