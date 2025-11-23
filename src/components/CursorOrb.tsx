import { useState, useEffect } from 'react';

export function CursorOrb() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className="absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 dark:opacity-20"
        style={{
          transition: 'left 0.15s ease-out, top 0.15s ease-out',
        }}
      />
    </div>
  );
}
export default CursorOrb;