"use client";

import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const morphTime = 1.5;
const cooldownTime = 5.0;

const useMorphingText = (texts: string[]) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(cooldownTime);
  const timeRef = useRef(new Date());
  const initializedRef = useRef(false);

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const setStyles = useCallback(
    (fraction: number) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      if (!current1 || !current2) return;

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

      current1.innerHTML = texts[textIndexRef.current % texts.length];
      current2.innerHTML = texts[(textIndexRef.current + 1) % texts.length];
    },
    [texts],
  );

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;

    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }

    setStyles(fraction);

    if (fraction === 1) {
      textIndexRef.current++;
    }
  }, [setStyles]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (current1 && current2) {
      current2.style.filter = "none";
      current2.style.opacity = "100%";
      current1.style.filter = "none";
      current1.style.opacity = "0%";
    }
  }, []);

  // Initialize with first text immediately
  const initialize = useCallback(() => {
    if (!initializedRef.current && text1Ref.current && text2Ref.current && texts.length > 0) {
      text1Ref.current.innerHTML = texts[0];
      text1Ref.current.style.opacity = "0%";
      text1Ref.current.style.filter = "none";
      
      text2Ref.current.innerHTML = texts[0];
      text2Ref.current.style.opacity = "100%";
      text2Ref.current.style.filter = "none";
      
      initializedRef.current = true;
    }
  }, [texts]);

  useEffect(() => {
    // Initialize immediately
    initialize();
    
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Ensure initialization happens
      if (!initializedRef.current) {
        initialize();
        return;
      }

      const newTime = new Date();
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = newTime;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };

    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [doMorph, doCooldown, initialize]);

  return { text1Ref, text2Ref };
};

interface MorphingTextProps {
  className?: string;
  texts: string[];
}

const Texts: React.FC<Pick<MorphingTextProps, "texts">> = ({ texts }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts);
  
  return (
    <>
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full whitespace-nowrap overflow-hidden text-ellipsis"
        ref={text1Ref}
        dangerouslySetInnerHTML={{ __html: texts[0] || '' }}
      />
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full whitespace-nowrap overflow-hidden text-ellipsis"
        ref={text2Ref}
        dangerouslySetInnerHTML={{ __html: texts[0] || '' }}
      />
    </>
  );
};

const SvgFilters: React.FC = () => (
  <svg id="filters" className="hidden" preserveAspectRatio="xMidYMid slice">
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
);

const MorphingText: React.FC<MorphingTextProps> = ({ texts, className }) => (
  <div
    className={cn(
      "relative mx-auto w-full max-w-6xl text-center font-sans font-bold leading-none [filter:url(#threshold)_blur(0.6px)]",
      // FIXED: Just a little larger than original - much more reasonable sizing
      "h-16 text-2xl py-2", // Mobile - just slightly larger
      "sm:h-20 sm:text-3xl sm:py-3", // Small screens - modest increase
      "md:h-24 md:text-4xl md:py-3", // Medium screens - reasonable size
      "lg:h-28 lg:text-5xl lg:py-4", // Large screens - just a bit larger
      "xl:h-32 xl:text-6xl xl:py-4", // Extra large - not too big
      className,
    )}
  >
    <Texts texts={texts} />
    <SvgFilters />
  </div>
);

export { MorphingText };