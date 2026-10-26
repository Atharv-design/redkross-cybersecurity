import React, { useState, useEffect, useRef } from 'react';

/**
 * ArcCarousel - Continuous 3D Arc Wheel with Atmospheric Smoky Blending
 * 
 * Features:
 * - Cloudy & smoky depth-of-field: Non-apex cards progressively blur and dissolve into dark mist
 * - Zero sharp edges: Multi-directional soft vignettes (horizontal & vertical smoke gradients)
 * - Auto-advances every 1 second continuously
 * - Smooth pointer drag with seamless magnetic snapping
 */
export default function ArcCarousel({
  items,
  activeIndex,
  onChange,
  renderItem,
  cardWidth = 340,
  cardHeight = 490,
  radius = 980,
  autoPlayInterval = 1000
}) {
  const containerRef = useRef(null);

  // Wheel configuration: 15 total slots (repeated for infinite continuous rotation)
  const TOTAL_SLOTS = 15;
  const ANGLE_STEP = 360 / TOTAL_SLOTS; // 24 degrees per card

  const [currentAngle, setCurrentAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef({ x: 0, startAngle: 0, hasMoved: false });

  // 15 virtual wheel items
  const wheelItems = React.useMemo(() => {
    if (!items || items.length === 0) return [];
    const list = [];
    for (let i = 0; i < TOTAL_SLOTS; i++) {
      const origIndex = i % items.length;
      list.push({
        ...items[origIndex],
        _slotIndex: i,
        _origIndex: origIndex,
      });
    }
    return list;
  }, [items]);

  // Sync external activeIndex
  useEffect(() => {
    if (isDragging) return;
    const currentSlot = Math.round(currentAngle / ANGLE_STEP);
    const currentOrig = ((currentSlot % items.length) + items.length) % items.length;
    if (currentOrig !== activeIndex) {
      let diff = activeIndex - currentOrig;
      if (diff > items.length / 2) diff -= items.length;
      if (diff < -items.length / 2) diff += items.length;
      setCurrentAngle((prev) => (Math.round(prev / ANGLE_STEP) + diff) * ANGLE_STEP);
    }
  }, [activeIndex, items.length, isDragging, ANGLE_STEP]);

  // Continuous 1-second auto rotation
  useEffect(() => {
    if (isDragging || items.length === 0) return;

    const timer = setInterval(() => {
      setCurrentAngle((prev) => {
        const next = Math.round(prev / ANGLE_STEP) + 1;
        const target = next * ANGLE_STEP;
        const origIdx = ((next % items.length) + items.length) % items.length;
        onChange?.(origIdx);
        return target;
      });
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isDragging, items.length, onChange, autoPlayInterval, ANGLE_STEP]);

  // Pointer drag handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
      startAngle: currentAngle,
      hasMoved: false,
    };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = clientX - dragStartRef.current.x;

    if (Math.abs(deltaX) > 4) {
      dragStartRef.current.hasMoved = true;
    }

    const newAngle = dragStartRef.current.startAngle - deltaX * 0.085;
    setCurrentAngle(newAngle);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const nearestStep = Math.round(currentAngle / ANGLE_STEP);
    const snappedAngle = nearestStep * ANGLE_STEP;
    setCurrentAngle(snappedAngle);

    const origIdx = ((nearestStep % items.length) + items.length) % items.length;
    onChange?.(origIdx);
  };

  const handleCardClick = (slotIndex, origIndex) => {
    if (dragStartRef.current.hasMoved) return;
    const currentStep = Math.round(currentAngle / ANGLE_STEP);
    const diff = slotIndex - (currentStep % TOTAL_SLOTS);
    let shortest = diff;
    if (shortest > TOTAL_SLOTS / 2) shortest -= TOTAL_SLOTS;
    if (shortest < -TOTAL_SLOTS / 2) shortest += TOTAL_SLOTS;

    const nextStep = currentStep + shortest;
    setCurrentAngle(nextStep * ANGLE_STEP);
    onChange?.(origIndex);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-[580px] sm:h-[640px] select-none flex flex-col items-center justify-start overflow-hidden ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{ 
        touchAction: 'pan-y',
        maskImage: 'radial-gradient(ellipse 95% 88% at 50% 48%, black 60%, rgba(0,0,0,0.7) 82%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 95% 88% at 50% 48%, black 60%, rgba(0,0,0,0.7) 82%, transparent 100%)',
      }}
    >
      {/* Atmospheric Cloudy Ambient Light Layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[500px] bg-[#00F0FF]/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-[#1e40af]/[0.08] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[320px] bg-black/50 rounded-full blur-[100px] pointer-events-none" />

      {/* The 2D Arch Wheel Container */}
      <div 
        className="absolute left-1/2"
        style={{
          top: `${radius + 65}px`,
          width: 0,
          height: 0,
          transform: `rotate(${-currentAngle}deg)`,
          transition: isDragging 
            ? 'none' 
            : 'transform 0.45s cubic-bezier(0.2, 0.8, 0.25, 1)',
        }}
      >
        {wheelItems.map((item) => {
          const slotAngle = item._slotIndex * ANGLE_STEP;
          
          let relativeAngle = slotAngle - (currentAngle % 360);
          while (relativeAngle > 180) relativeAngle -= 360;
          while (relativeAngle < -180) relativeAngle += 360;

          const absAngle = Math.abs(relativeAngle);
          const isVisible = absAngle <= 56;
          const isApex = absAngle < ANGLE_STEP / 2;

          // Atmospheric Smoky Fog Calculations (Cloudy depth of field)
          // Cards smoothly blur and dissolve into smoke as they move away from the center
          const blurAmount = isApex ? 0 : Math.min(6, Math.pow(absAngle / 16, 1.25));
          const opacityAmount = isVisible 
            ? (isApex ? 1 : Math.max(0.12, 1 - Math.pow(absAngle / 50, 1.4))) 
            : 0;

          return (
            <div
              key={item._slotIndex}
              className="absolute"
              style={{
                width: cardWidth,
                height: cardHeight,
                left: -cardWidth / 2,
                top: -radius,
                transformOrigin: `50% ${radius}px`,
                transform: `rotate(${slotAngle}deg)`,
                opacity: opacityAmount,
                visibility: isVisible ? 'visible' : 'hidden',
                pointerEvents: isVisible ? 'auto' : 'none',
                filter: blurAmount > 0.1 ? `blur(${blurAmount.toFixed(1)}px)` : 'none',
                zIndex: isApex ? 50 : 20 - Math.round(absAngle),
                transition: 'opacity 0.4s ease, filter 0.4s ease',
              }}
              onClick={() => handleCardClick(item._slotIndex, item._origIndex)}
            >
              <div 
                className={`w-full h-full transition-transform duration-300 ${
                  isApex ? 'scale-[1.03]' : 'scale-[0.94]'
                }`}
              >
                {renderItem(item, {
                  isApex,
                  angle: relativeAngle,
                  index: item._origIndex,
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Atmospheric Smoky Edge Vignettes (Blends sharp outer edges into soft cloud mist) */}
      {/* 1. Left Edge Smoky Fade */}
      <div 
        className="absolute inset-y-0 left-0 w-32 sm:w-48 pointer-events-none z-30" 
        style={{ background: 'linear-gradient(to right, #04070D 15%, rgba(4,7,13,0.8) 50%, transparent 100%)' }}
      />
      {/* 2. Right Edge Smoky Fade */}
      <div 
        className="absolute inset-y-0 right-0 w-32 sm:w-48 pointer-events-none z-30" 
        style={{ background: 'linear-gradient(to left, #04070D 15%, rgba(4,7,13,0.8) 50%, transparent 100%)' }}
      />
      {/* 3. Bottom Smoky Dissolve Layer */}
      <div 
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none z-30" 
        style={{ background: 'linear-gradient(to top, #04070D 20%, rgba(4,7,13,0.85) 60%, transparent 100%)' }}
      />
      {/* 4. Top Gentle Smoke Blend */}
      <div 
        className="absolute top-0 inset-x-0 h-16 pointer-events-none z-30" 
        style={{ background: 'linear-gradient(to bottom, #04070D 10%, transparent 100%)' }}
      />
    </div>
  );
}
