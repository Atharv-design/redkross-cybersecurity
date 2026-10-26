import React, { useState, useEffect, useRef } from 'react';

/**
 * ArcCarousel - Continuous 3D Arc Wheel with Smooth Interactive Drag & Auto-Rotation
 * 
 * Features:
 * - Clean glassmorphism cards that seamlessly blend into the background
 * - Zero artificial edge boxes, letterbox masks, or cloudy filters
 * - 1.5-second auto-rotation with automatic pause on cursor hover
 * - Full hold-and-drag cursor interaction with magnetic card snapping
 */
export default function ArcCarousel({
  items,
  activeIndex,
  onChange,
  renderItem,
  cardWidth = 340,
  cardHeight = 500,
  radius = 1100,
  autoPlayInterval = 1500 // 1.5 seconds per user specification
}) {
  const containerRef = useRef(null);

  // Wheel configuration: 15 total virtual slots for smooth circular wrapping
  const TOTAL_SLOTS = 15;
  const ANGLE_STEP = 360 / TOTAL_SLOTS; // 24 degrees per slot

  const [currentAngle, setCurrentAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  // Sync external activeIndex if updated from parent
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

  // 1.5-second continuous auto rotation
  // Pauses automatically on hover or during active cursor drag
  useEffect(() => {
    if (isDragging || isHovered || items.length === 0) return;

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
  }, [isDragging, isHovered, items.length, onChange, autoPlayInterval, ANGLE_STEP]);

  // Pointer drag handlers (Hold-and-drag cursor interaction)
  const handlePointerDown = (e) => {
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {
      // Ignored if pointer capture is not supported
    }
    dragStartRef.current = {
      x: e.clientX,
      startAngle: currentAngle,
      hasMoved: false,
    };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current.x;

    if (Math.abs(deltaX) > 4) {
      dragStartRef.current.hasMoved = true;
    }

    // Dragging left rotates forward; dragging right rotates backward
    const newAngle = dragStartRef.current.startAngle - deltaX * 0.085;
    setCurrentAngle(newAngle);
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    if (e && e.currentTarget && e.pointerId !== undefined) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) {
        // Ignored
      }
    }

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
      className={`relative w-full select-none flex flex-col items-center justify-start ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={(e) => {
        setIsHovered(false);
        if (isDragging) handlePointerUp(e);
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ 
        height: `${cardHeight + 70}px`,
        touchAction: 'pan-y' 
      }}
    >
      {/* 2D Circular Arch Container */}
      <div 
        className="absolute left-1/2"
        style={{
          top: `${radius + 40}px`,
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
          const isVisible = absAngle <= 54;
          const isApex = absAngle < ANGLE_STEP / 2;

          // Clean natural opacity fade without artificial blurring
          const opacityAmount = isVisible 
            ? (isApex ? 1 : Math.max(0.2, 1 - (absAngle / 50))) 
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
                zIndex: isApex ? 50 : 20 - Math.round(absAngle),
                transition: 'opacity 0.35s ease',
              }}
              onClick={() => handleCardClick(item._slotIndex, item._origIndex)}
            >
              <div 
                className={`w-full h-full transition-transform duration-300 ${
                  isApex ? 'scale-100' : 'scale-[0.93]'
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
