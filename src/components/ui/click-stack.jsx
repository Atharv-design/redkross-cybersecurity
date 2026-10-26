import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Layers, MousePointerClick } from 'lucide-react';

/**
 * ClickStack Component (React Bits Pro direct implementation)
 * Interactive stack of cards that users can click through sequentially.
 * Features smooth spring physics, depth scaling, directional offsets, and cyber HUD telemetry.
 */
export default function ClickStack({
  items = [],
  renderItem,
  spreadY = -16,
  spreadX = 0,
  scaleStep = 0.045,
  rotationStep = 1.5,
  visibleCount = 3,
  className = '',
  cardClassName = ''
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  if (!items || items.length === 0) return null;

  const total = items.length;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleSelect = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Reorder items so the active card is always at index 0
  const stackedItems = [];
  for (let i = 0; i < Math.min(visibleCount, total); i++) {
    const itemIndex = (currentIndex + i) % total;
    stackedItems.push({
      item: items[itemIndex],
      itemIndex,
      depth: i
    });
  }

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* The Stacked Cards Stage */}
      <div className="relative w-full max-w-2xl min-h-[500px] flex items-center justify-center pt-4 pb-2">
        {stackedItems
          .slice()
          .reverse()
          .map(({ item, itemIndex, depth }) => {
            const isTop = depth === 0;
            // Alternating rotation for organic tactical card stack effect
            const rotation = depth === 0 ? 0 : (depth % 2 === 1 ? -rotationStep * depth : rotationStep * depth);
            const yOffset = depth * spreadY;
            const xOffset = depth * spreadX;
            const scale = 1 - depth * scaleStep;
            const opacity = 1 - depth * 0.18;
            const zIndex = visibleCount - depth;

            return (
              <motion.div
                key={item.id || item.slug || itemIndex}
                layout
                style={{
                  zIndex,
                  transformOrigin: 'top center'
                }}
                animate={{
                  y: yOffset,
                  x: xOffset,
                  scale,
                  opacity,
                  rotate: rotation
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 24
                }}
                onClick={() => {
                  if (isTop) {
                    handleNext();
                  } else {
                    handleSelect(itemIndex);
                  }
                }}
                className={`absolute inset-x-0 mx-auto w-full max-w-2xl cursor-pointer ${
                  isTop ? 'cursor-pointer hover:-translate-y-1' : 'pointer-events-auto opacity-75 hover:opacity-90'
                } transition-all duration-200 ${cardClassName}`}
              >
                {/* Visual Glass Edge Backdrop for lower stack layers */}
                {!isTop && (
                  <div className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm z-20 pointer-events-none transition-opacity duration-300 border border-white/5" />
                )}

                {/* Render the Actual Card Component */}
                <div className="relative z-10 w-full">
                  {renderItem ? renderItem(item, itemIndex, isTop) : item}
                </div>
              </motion.div>
            );
          })}
      </div>

      {/* Stack Controls & Interactive Dot Indicators */}
      <div className="mt-6 flex items-center justify-center gap-4 z-20">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous project card"
          className="p-2.5 rounded-xl bg-white/[0.04] border border-cyan-500/30 hover:border-cyan-400 text-white hover:text-[#00F0FF] hover:bg-cyan-500/10 transition-all active:scale-95 shadow-[0_0_12px_rgba(0,240,255,0.1)] focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Tactical Pagination Dots */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10">
          {items.map((it, idx) => (
            <button
              key={it.id || it.slug || idx}
              type="button"
              onClick={() => handleSelect(idx)}
              aria-label={`Jump to card ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next project card"
          className="p-2.5 rounded-xl bg-white/[0.04] border border-cyan-500/30 hover:border-cyan-400 text-white hover:text-[#00F0FF] hover:bg-cyan-500/10 transition-all active:scale-95 shadow-[0_0_12px_rgba(0,240,255,0.1)] focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
