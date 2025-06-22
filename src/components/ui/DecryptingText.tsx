import React, { useState, useEffect, useRef } from 'react';

interface DecryptingTextProps {
  titles: string[];
  className?: string;
  style?: React.CSSProperties;
}

// Only letters for smoother, cleaner animation
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ANIMATION_SPEED = 80; // Slower: 80ms per frame (was 30ms)
const TITLE_DISPLAY_TIME = 6000; // 6 seconds to display each title
const TRANSITION_TIME = 1500; // Reduced to 1.5 seconds for transition animation (was 3 seconds)

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

  // Create a more gradual reveal order - start from center and work outward
  const createSmoothRevealOrder = (length: number) => {
    const indices = Array.from({ length }, (_, i) => i);
    const center = Math.floor(length / 2);
    const ordered = [];
    
    // Start from center and alternate left/right
    for (let i = 0; i < length; i++) {
      if (i % 2 === 0) {
        const rightIndex = center + Math.floor(i / 2);
        if (rightIndex < length) ordered.push(rightIndex);
      } else {
        const leftIndex = center - Math.ceil(i / 2);
        if (leftIndex >= 0) ordered.push(leftIndex);
      }
    }
    
    // Add some randomness to make it less predictable
    const shuffled = [];
    const chunkSize = Math.max(1, Math.floor(ordered.length / 4));
    
    for (let i = 0; i < ordered.length; i += chunkSize) {
      const chunk = ordered.slice(i, i + chunkSize);
      // Shuffle within each chunk
      for (let j = chunk.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [chunk[j], chunk[k]] = [chunk[k], chunk[j]];
      }
      shuffled.push(...chunk);
    }
    
    return shuffled;
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
        // Use only letters for cleaner look
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
    
    // Create smooth reveal order
    const revealOrder = createSmoothRevealOrder(characterPositions.length);
    const revealedIndices = new Set<number>();
    
    let revealedCount = 0;
    const totalFrames = Math.ceil(TRANSITION_TIME / ANIMATION_SPEED);
    // Reveal more characters per frame since we have less time
    const charactersPerFrame = Math.max(2, Math.ceil(characterPositions.length / totalFrames));

    const animate = () => {
      // Reveal characters more quickly due to shorter transition time
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