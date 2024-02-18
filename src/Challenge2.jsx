import { useState, useEffect } from 'react';

export default function Challenge2() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    function handleMove(e) {
        if (canMove) {
            setPosition({ x: e.clientX, y: e.clientY });
        } else {
            setPosition({x: 50, y: 50 })
        }
      
    }
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [canMove]);

  return (
    <>
      <label>
        <input type="checkbox"
          checked={canMove}
          onChange={e => setCanMove(e.target.checked)} 
        />
        The dot is allowed to move
      </label>
      <hr />
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
    </>
  );
}
