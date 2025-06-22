import React, { useState, useEffect, useRef } from 'react';

interface SmoothTextTransitionProps {
  titles: string[];
  className?: string;
  style?: React.CSSProperties;
  effect?: 'typewriter' | 'fade' | 'slide' | 'morphCharacter';
}

const TYPEWRITER_SPEED = 80; // ms per character
const PAUSE_TIME = 3000; // 3 seconds pause between titles
const FADE_DURATION = 800; // 800ms fade transition

export const SmoothTextTransition: React.FC<SmoothTextTransitionProps> = ({ 
  titles, 
  className = "", 
  style = {},
  effect = 'typewriter'
}) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const formatTitle = (title: string) => {
    return title.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  };

  // Typewriter Effect
  const typewriterEffect = () => {
    const currentTitle = formatTitle(titles[currentTitleIndex]);
    setIsAnimating(true);
    setDisplayText('');
    
    let charIndex = 0;
    
    const typeChar = () => {
      if (charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
        timeoutRef.current = setTimeout(typeChar, TYPEWRITER_SPEED);
      } else {
        // Finished typing, pause then move to next
        timeoutRef.current = setTimeout(() => {
          setIsAnimating(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, PAUSE_TIME);
      }
    };

    typeChar();
  };

  // Fade Effect
  const fadeEffect = () => {
    setIsAnimating(true);
    
    // Fade out
    setOpacity(0);
    
    timeoutRef.current = setTimeout(() => {
      // Change text while invisible
      setDisplayText(formatTitle(titles[currentTitleIndex]));
      
      // Fade in
      setOpacity(1);
      
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, PAUSE_TIME);
    }, FADE_DURATION);
  };

  // Character-by-Character Morphing (Smoothest)
  const morphCharacterEffect = () => {
    const currentTitle = formatTitle(titles[currentTitleIndex]);
    const nextTitle = formatTitle(titles[(currentTitleIndex + 1) % titles.length]);
    
    setIsAnimating(true);
    
    const maxLength = Math.max(currentTitle.length, nextTitle.length);
    const animationDuration = 2000; // 2 seconds
    const frameRate = 60; // 60fps
    const totalFrames = (animationDuration / 1000) * frameRate;
    
    let currentFrame = 0;
    
    const animate = () => {
      const progress = currentFrame / totalFrames;
      let result = '';
      
      for (let i = 0; i < maxLength; i++) {
        const currentChar = currentTitle[i] || '';
        const nextChar = nextTitle[i] || '';
        
        if (currentChar === nextChar) {
          result += currentChar;
        } else if (progress < 0.3) {
          // Early phase: keep current character
          result += currentChar;
        } else if (progress < 0.7) {
          // Middle phase: random character
          const chars = 'abcdefghijklmnopqrstuvwxyz';
          result += chars[Math.floor(Math.random() * chars.length)];
        } else {
          // Late phase: transition to next character
          if (Math.random() < (progress - 0.7) / 0.3) {
            result += nextChar;
          } else {
            result += currentChar;
          }
        }
      }
      
      setDisplayText(result);
      currentFrame++;
      
      if (currentFrame < totalFrames) {
        timeoutRef.current = setTimeout(animate, 1000 / frameRate);
      } else {
        setDisplayText(nextTitle);
        setIsAnimating(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };
    
    animate();
  };

  // Slide Effect
  const slideEffect = () => {
    setIsAnimating(true);
    
    // Slide out current text
    setDisplayText('');
    
    timeoutRef.current = setTimeout(() => {
      // Set new text and slide in
      setDisplayText(formatTitle(titles[currentTitleIndex]));
      
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, PAUSE_TIME);
    }, 300);
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!isAnimating) {
      timeoutRef.current = setTimeout(() => {
        switch (effect) {
          case 'typewriter':
            typewriterEffect();
            break;
          case 'fade':
            fadeEffect();
            break;
          case 'slide':
            slideEffect();
            break;
          case 'morphCharacter':
            morphCharacterEffect();
            break;
          default:
            typewriterEffect();
        }
      }, effect === 'typewriter' ? 100 : PAUSE_TIME);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentTitleIndex, isAnimating, effect]);

  // Initialize
  useEffect(() => {
    if (!displayText) {
      setDisplayText(formatTitle(titles[0]));
    }
  }, []);

  const transitionStyle = {
    ...style,
    opacity: effect === 'fade' ? opacity : 1,
    transition: effect === 'fade' ? `opacity ${FADE_DURATION}ms ease-in-out` : 'none',
    transform: effect === 'slide' && isAnimating ? 'translateY(-20px)' : 'translateY(0)',
  };

  return (
    <div className={className} style={transitionStyle}>
      {displayText}
      {effect === 'typewriter' && isAnimating && (
        <span className="animate-pulse">|</span>
      )}
    </div>
  );
};