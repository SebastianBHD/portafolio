import { useState, useEffect, useMemo } from 'react';

function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [primaryColorRgb, setPrimaryColorRgb] = useState("159, 134, 192");

  const particles = useMemo(() => 
    [...Array(60)].map((_, i) => ({
      id: i,
      size: Math.random() * 8 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: Math.random() * 10 + 10,
      animationDelay: Math.random() * 5,
      opacity: 0.2 + Math.random() * 0.3,
    })), []
  );

  useEffect(() => {
    const getRgb = () => {
      const color = getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim();
      if (!color) return "159, 134, 192";
      const hex = color.replace("#", "");
      return `${parseInt(hex.substring(0, 2), 16)}, ${parseInt(hex.substring(2, 4), 16)}, ${parseInt(hex.substring(4, 6), 16)}`;
    };

    setPrimaryColorRgb(getRgb());
    const observer = new MutationObserver(() => setPrimaryColorRgb(getRgb()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden" style={{ zIndex: 0 }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)', zIndex: 1 }} />
      
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
        <div className="absolute" style={{ width: '800px', height: '800px', background: `radial-gradient(circle, rgba(${primaryColorRgb}, 0.35) 0%, rgba(${primaryColorRgb}, 0.2) 30%, transparent 60%)`, filter: 'blur(100px)', animation: 'glowMove1 20s ease-in-out infinite', left: '20%', top: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute" style={{ width: '700px', height: '700px', background: `radial-gradient(circle, rgba(${primaryColorRgb}, 0.3) 0%, rgba(${primaryColorRgb}, 0.15) 35%, transparent 65%)`, filter: 'blur(90px)', animation: 'glowMove2 25s ease-in-out infinite', left: '80%', top: '80%', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute" style={{ width: '600px', height: '600px', background: `radial-gradient(circle, rgba(${primaryColorRgb}, 0.4) 0%, rgba(${primaryColorRgb}, 0.25) 25%, transparent 55%)`, filter: 'blur(110px)', animation: 'glowPulse 15s ease-in-out infinite', left: '40%', top: '20%', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute" style={{ width: '650px', height: '650px', background: `radial-gradient(circle, rgba(${primaryColorRgb}, 0.28) 0%, rgba(${primaryColorRgb}, 0.18) 30%, transparent 60%)`, filter: 'blur(95px)', animation: 'glowMove3 30s ease-in-out infinite', left: '60%', top: '40%', transform: 'translate(-50%, -50%)' }} />
      </div>

      <div className="absolute inset-0" style={{ zIndex: 2, transform: 'translateZ(0)', willChange: 'transform' }}>
        {particles.map((p) => (
          <div key={p.id} className="absolute rounded-full pointer-events-none" style={{ width: `${p.size}px`, height: `${p.size}px`, left: `${p.left}%`, top: `${p.top}%`, background: `rgba(${primaryColorRgb}, 0.6)`, borderRadius: '50%', animation: `float ${p.animationDuration}s infinite ease-in-out`, animationDelay: `${p.animationDelay}s`, boxShadow: `0 0 ${p.size * 2}px rgba(${primaryColorRgb}, 0.5)`, opacity: p.opacity, transform: 'translateZ(0)', willChange: 'transform, opacity', mixBlendMode: 'normal' }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3, transform: 'translateZ(0)', isolation: 'isolate' }}>
        <div className="absolute transition-all duration-300 ease-out" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, transform: 'translate(-50%, -50%) translateZ(0)', width: '600px', height: '600px', background: `radial-gradient(circle, rgba(${primaryColorRgb}, 0.4) 0%, rgba(${primaryColorRgb}, 0.2) 20%, rgba(${primaryColorRgb}, 0.1) 40%, transparent 70%)`, filter: 'blur(80px)', opacity: 0.8, mixBlendMode: 'screen', willChange: 'transform' }} />
        <div className="absolute transition-all duration-500 ease-out" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, transform: 'translate(-50%, -50%) translateZ(0)', width: '400px', height: '400px', background: `radial-gradient(circle, rgba(${primaryColorRgb}, 0.3) 0%, rgba(${primaryColorRgb}, 0.15) 30%, transparent 60%)`, filter: 'blur(60px)', opacity: 0.6, mixBlendMode: 'screen', willChange: 'transform' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(0, 0, 0, 0.3)', zIndex: 4 }} />
    </div>
  );
}

export default AnimatedBackground;

