import React, { useState, useEffect, useRef } from 'react';

interface DecryptingTextProps {
  titles: string[];
  className?: string;
  style?: React.CSSProperties;
}

// Only letters for smoother, cleaner animation
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ANIMATION_SPEED = 80; // 80ms per frame
const TITLE_DISPLAY_TIME = 6000; // 6 seconds to display each title
const TRANSITION_TIME = 1500; // 1.5 seconds for transition animation

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

  // Convert current title to uppercase
  const currentTitle = titles[currentTitleIndex].toUpperCase();

  // Create a completely random reveal order for more spread out effect
  const createRandomRevealOrder = (length: number) => {
    const indices = Array.from({ length }, (_, i) => i);
    
    // Fisher-Yates shuffle for true randomness
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
        // Use random letters for each position
        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
      })
      .join('');
  };

  const animateToTitle = (targetTitle: string) => {
    setIsAnimating(true);
    
    // Get ALL character positions (including letters, numbers, punctuation - everything except spaces)
    const characterPositions = targetTitle
      .split('')
      .map((char, index) => ({ char, index }))
      .filter(({ char }) => char !== ' ') // Only filter out spaces
      .map(({ index }) => index);
    
    // Create completely random reveal order for maximum spread
    const revealOrder = createRandomRevealOrder(characterPositions.length);
    const revealedIndices = new Set<number>();
    
    let revealedCount = 0;
    const totalFrames = Math.ceil(TRANSITION_TIME / ANIMATION_SPEED);
    // Reveal fewer characters per frame for more gradual, spread out effect
    const charactersPerFrame = Math.max(1, Math.ceil(characterPositions.length / (totalFrames * 1.2)));

    const animate = () => {
      // Reveal characters one by one for maximum spread
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
    <div className={className} style={style}>
      {displayText}
    </div>
  );
};