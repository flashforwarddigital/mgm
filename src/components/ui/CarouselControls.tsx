import React from 'react';
import { carouselConfig } from '../../config/carousel-config';

interface CarouselControlsProps {
  onSpeedChange?: (speed: string) => void;
  onSpacingChange?: (wordSpacing: string, letterSpacing: string) => void;
  onPositionChange?: (position: 'top' | 'center' | 'bottom') => void;
}

// Development component for easy carousel adjustments
// Remove this component in production
export const CarouselControls: React.FC<CarouselControlsProps> = ({
  onSpeedChange,
  onSpacingChange,
  onPositionChange
}) => {
  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg z-50 max-w-xs">
      <h3 className="text-sm font-bold mb-2">Carousel Controls</h3>
      
      {/* Speed Control */}
      <div className="mb-3">
        <label className="text-xs block mb-1">Speed (seconds)</label>
        <select 
          className="w-full text-xs bg-gray-700 text-white p-1 rounded"
          defaultValue={carouselConfig.animation.duration}
          onChange={(e) => onSpeedChange?.(e.target.value)}
        >
          <option value="60s">Fast (60s)</option>
          <option value="90s">Medium (90s)</option>
          <option value="120s">Slow (120s)</option>
          <option value="180s">Ultra Slow (180s)</option>
          <option value="240s">Glacial (240s)</option>
        </select>
      </div>

      {/* Position Control */}
      <div className="mb-3">
        <label className="text-xs block mb-1">Position</label>
        <select 
          className="w-full text-xs bg-gray-700 text-white p-1 rounded"
          defaultValue={carouselConfig.position.verticalPosition}
          onChange={(e) => onPositionChange?.(e.target.value as 'top' | 'center' | 'bottom')}
        >
          <option value="top">Top</option>
          <option value="center">Center</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>

      {/* Spacing Controls */}
      <div className="mb-3">
        <label className="text-xs block mb-1">Word Spacing</label>
        <select 
          className="w-full text-xs bg-gray-700 text-white p-1 rounded"
          defaultValue={carouselConfig.spacing.wordSpacing}
          onChange={(e) => onSpacingChange?.(e.target.value, carouselConfig.spacing.letterSpacing)}
        >
          <option value="1rem">Tight (1rem)</option>
          <option value="2rem">Normal (2rem)</option>
          <option value="3rem">Wide (3rem)</option>
          <option value="4rem">Extra Wide (4rem)</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="text-xs block mb-1">Letter Spacing</label>
        <select 
          className="w-full text-xs bg-gray-700 text-white p-1 rounded"
          defaultValue={carouselConfig.spacing.letterSpacing}
          onChange={(e) => onSpacingChange?.(carouselConfig.spacing.wordSpacing, e.target.value)}
        >
          <option value="0.1em">Tight (0.1em)</option>
          <option value="0.15em">Normal (0.15em)</option>
          <option value="0.2em">Wide (0.2em)</option>
          <option value="0.25em">Extra Wide (0.25em)</option>
          <option value="0.3em">Maximum (0.3em)</option>
        </select>
      </div>

      <div className="text-xs text-gray-400 mt-2">
        Edit config in: src/config/carousel-config.ts
      </div>
    </div>
  );
};