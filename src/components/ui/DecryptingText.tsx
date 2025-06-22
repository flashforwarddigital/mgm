import React, { useState, useEffect, useRef } from 'react';

interface DecryptingTextProps {
  titles: string[];
  className?: string;
  style?: React.CSSProperties;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
const ANIMATION_SPEED = 30; // milliseconds per frame
const TITLE_DISPLAY_TIME = 7000; // 7 seconds to display each title (5 + 2 extra)
const TRANSITION_TIME = 4000; // 4 seconds for transition animation (2 + 2 extra)

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

  // Create a random reveal order for characters
  const createRandomRevealOrder = (length: number) => {
    const indices = Array.from({ length }, (_, i) => i);
    // Fisher-Yates shuffle algorithm
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  };

  const scrambleText = (targetText: string, revealedIndices: Set<number>) => {
    return targetText
      .split('')
      .map((char, index) => {
        if (revealedIndices.has(index)) {
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
    
    // Filter out spaces and get only character positions
    const characterPositions = targetTitle
      .split('')
      .map((char, index) => ({ char, index }))
      .filter(({ char }) => char !== ' ')
      .map(({ index }) => index);
    
    // Create random reveal order for non-space characters
    const revealOrder = createRandomRevealOrder(characterPositions.length);
    const revealedIndices = new Set<number>();
    
    let revealedCount = 0;
    const totalFrames = Math.ceil(TRANSITION_TIME / ANIMATION_SPEED);
    const charactersPerFrame = Math.max(1, Math.ceil(characterPositions.length / totalFrames));

    const animate = () => {
      // Reveal more characters randomly
      const charactersToReveal = Math.min(
        charactersPerFrame,
        characterPositions.length - revealedCount
      );

      for (let i = 0; i < charactersToReveal && revealedCount < characterPositions.length; i++) {
        const nextRevealIndex = revealOrder[revealedCount];
        const actualIndex = characterPositions[nextRevealIndex];
        revealedIndices.add(actualIndex);
        revealedCount++;
      }

      // Always reveal spaces immediately
      targetTitle.split('').forEach((char, index) => {
        if (char === ' ') {
          revealedIndices.add(index);
        }
      });

      const scrambled = scrambleText(targetTitle, revealedIndices);
      setDisplayText(scrambled);

      if (revealedCount < characterPositions.length) {
        animationRef.current = setTimeout(animate, ANIMATION_SPEED);
      } else {
        setIsAnimating(false);
        // Schedule next title change after 7 seconds (5 + 2 extra)
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
    <div className={className} style={style}>
      {displayText}
    </div>
  );
};