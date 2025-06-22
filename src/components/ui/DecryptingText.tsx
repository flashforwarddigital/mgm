import React, { useState, useEffect, useRef } from 'react';

interface DecryptingTextProps {
  titles: string[];
  className?: string;
  style?: React.CSSProperties;
}

// Only lowercase letters for smoother animation
const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
const ANIMATION_SPEED = 60; // 60ms per frame
const TITLE_DISPLAY_TIME = 6000; // 6 seconds to display each title
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

  // Capitalize first letter of each word
  const formatTitle = (title: string) => {
    return title.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  };

  const currentTitle = formatTitle(titles[currentTitleIndex]);
  const nextTitle = formatTitle(titles[(currentTitleIndex + 1) % titles.length]);

  const scrambleCharacter = (char: string) => {
    if (char === ' ') return ' ';
    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  };

  const morphTitles = (fromTitle: string, toTitle: string) => {
    setIsAnimating(true);
    
    const quarterTime = TRANSITION_TIME / 4;
    const framesPerQuarter = Math.ceil(quarterTime / ANIMATION_SPEED);
    
    let currentFrame = 0;
    const totalFrames = framesPerQuarter * 4;
    
    // Split titles into words for word-level morphing
    const fromWords = fromTitle.split(' ');
    const toWords = toTitle.split(' ');
    const maxWords = Math.max(fromWords.length, toWords.length);
    
    const animate = () => {
      const quarter = Math.floor(currentFrame / framesPerQuarter) + 1;
      const frameInQuarter = currentFrame % framesPerQuarter;
      const progressInQuarter = frameInQuarter / framesPerQuarter;
      
      let resultWords: string[] = [];
      
      if (quarter === 1) {
        // Quarter 1: Start with decrypt effect using initial title's structure
        resultWords = fromWords.map(word => {
          // Gradually scramble characters
          if (Math.random() < progressInQuarter * 0.7) {
            return word.split('').map(char => 
              Math.random() < 0.6 ? scrambleCharacter(char) : char
            ).join('');
          }
          return word;
        });
        
      } else if (quarter === 2) {
        // Quarter 2: Change half the words randomly (not first half)
        const wordsToChange = Math.ceil(maxWords / 2);
        const randomIndices = new Set<number>();
        
        // Select random word positions to change
        while (randomIndices.size < wordsToChange && randomIndices.size < maxWords) {
          randomIndices.add(Math.floor(Math.random() * maxWords));
        }
        
        for (let i = 0; i < maxWords; i++) {
          if (randomIndices.has(i)) {
            // Morphing word - mix of scrambled and target
            const targetWord = toWords[i] || '';
            const sourceWord = fromWords[i] || '';
            const maxLength = Math.max(targetWord.length, sourceWord.length);
            
            let morphedWord = '';
            for (let j = 0; j < maxLength; j++) {
              if (Math.random() < progressInQuarter * 0.5) {
                morphedWord += targetWord[j] || '';
              } else {
                morphedWord += scrambleCharacter(sourceWord[j] || 'a');
              }
            }
            resultWords[i] = morphedWord;
          } else {
            // Keep original word with some scrambling
            const word = fromWords[i] || '';
            resultWords[i] = word.split('').map(char => 
              Math.random() < 0.3 ? scrambleCharacter(char) : char
            ).join('');
          }
        }
        
      } else if (quarter === 3) {
        // Quarter 3: Change some words but not all
        const wordsToChange = Math.ceil(maxWords * 0.7);
        
        for (let i = 0; i < maxWords; i++) {
          if (i < wordsToChange) {
            // Transitioning words
            const targetWord = toWords[i] || '';
            const sourceWord = fromWords[i] || '';
            
            let morphedWord = '';
            const targetLength = targetWord.length;
            const sourceLength = sourceWord.length;
            
            // Gradually transition to target length and characters
            const currentLength = Math.round(
              sourceLength + (targetLength - sourceLength) * progressInQuarter
            );
            
            for (let j = 0; j < currentLength; j++) {
              if (Math.random() < progressInQuarter * 0.7) {
                morphedWord += targetWord[j] || scrambleCharacter('a');
              } else {
                morphedWord += scrambleCharacter(sourceWord[j] || 'a');
              }
            }
            resultWords[i] = morphedWord;
          } else {
            // Keep some original words with light scrambling
            const word = fromWords[i] || '';
            resultWords[i] = word.split('').map(char => 
              Math.random() < 0.2 ? scrambleCharacter(char) : char
            ).join('');
          }
        }
        
      } else {
        // Quarter 4: Use all wording and letter amounts of new title
        resultWords = toWords.map((targetWord, i) => {
          let morphedWord = '';
          for (let j = 0; j < targetWord.length; j++) {
            if (Math.random() < progressInQuarter * 0.9) {
              morphedWord += targetWord[j];
            } else {
              morphedWord += scrambleCharacter(targetWord[j]);
            }
          }
          return morphedWord;
        });
      }
      
      setDisplayText(resultWords.join(' '));
      
      currentFrame++;
      
      if (currentFrame < totalFrames) {
        animationRef.current = setTimeout(animate, ANIMATION_SPEED);
      } else {
        // Animation complete - show final title
        setDisplayText(toTitle);
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

    // Start with the current title displayed
    if (!isAnimating) {
      setDisplayText(currentTitle);
      
      // Schedule the morph to next title
      titleTimeoutRef.current = setTimeout(() => {
        morphTitles(currentTitle, nextTitle);
      }, TITLE_DISPLAY_TIME);
    }

    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
      if (titleTimeoutRef.current) clearTimeout(titleTimeoutRef.current);
    };
  }, [currentTitleIndex]);

  // Initialize with first title
  useEffect(() => {
    if (!displayText) {
      setDisplayText(currentTitle);
    }
  }, []);

  return (
    <div className={className} style={style}>
      {displayText}
    </div>
  );
};