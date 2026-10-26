import React, { useState, useEffect, useRef } from 'react';

/**
 * ArcCarousel - Continuous 3D Arc Wheel for Cybersecurity Platform
 * 
 * Auto-rotates every 1 second continuously.
 * Single main page scroll - no inner trapped scrollbars or hijacked wheel events.
 */
export default function ArcCarousel({
  items,
  activeIndex,
  onChange,
  renderItem,
  cardWidth = 340,
  cardHeight = 490,
  radius = 980,
  autoPlayInterval = 1000 // Exact 1 second per user requirement
}) {
  const containerRef = useRef(null);

  // Wheel configuration: 15 total slots (repeated for infinite rotation)
  const TOTAL_SLOTS = 15;
  const ANGLE_STEP = 360 / TOTAL_SLOTS; // 24 degrees per card

  // Current angle in degrees (continuous float during dragging)
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Drag tracking refs
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

  // Sync external activeIndex if triggered externally (without dragging)
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

  // Continuous auto-play: Changes cards every 1 second
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

  // Pointer drag handlers (Manual swipe/drag capability)
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

    // Dragging left rotates wheel clockwise (advances forward)
    const newAngle = dragStartRef.current.startAngle - deltaX * 0.085;
    setCurrentAngle(newAngle);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Snap to the nearest card slot
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
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      {/* Centered Ambient Cyan & Cobalt Arch Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-[#00F0FF]/[0.06] rounded-full blur-[140px] pointer-events-none" />

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

          const isVisible = Math.abs(relativeAngle) <= 55;
          const isApex = Math.abs(relativeAngle) < ANGLE_STEP / 2;

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
                opacity: isVisible ? (isApex ? 1 : Math.max(0.35, 1 - Math.abs(relativeAngle) * 0.013)) : 0,
                visibility: isVisible ? 'visible' : 'hidden',
                pointerEvents: isVisible ? 'auto' : 'none',
                zIndex: isApex ? 50 : 20 - Math.round(Math.abs(relativeAngle)),
              }}
              onClick={() => handleCardClick(item._slotIndex, item._origIndex)}
            >
              <div 
                className={`w-full h-full transition-transform duration-300 ${
                  isApex ? 'scale-105' : 'scale-95'
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
    </div>
  );
}
