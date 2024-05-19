import React, { useEffect, useRef } from 'react';
import './cursor.css'; 

const Cursor = () => {
  const cursorRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { pageX: x, pageY: y } = e;

      if (cursorRef.current) {
        cursorRef.current.style.top = `${y}px`;
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.display = 'block';
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (cursorRef.current) {
          cursorRef.current.style.display = 'none';
        }
      }, 1000);
    };

    const handleMouseOut = () => {
      if (cursorRef.current) {
        cursorRef.current.style.display = 'none';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Cursor;
