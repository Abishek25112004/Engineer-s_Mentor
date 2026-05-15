import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) {
      setHidden(true);
      return;
    }

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseEnterInteractive = () => setHovering(true);
    const onMouseLeaveInteractive = () => setHovering(false);

    const animate = () => {
      // Dot follows instantly
      dotX += (mouseX - dotX) * 0.9;
      dotY += (mouseY - dotY) * 0.9;

      // Ring follows with delay
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) scale(${hovering ? 2 : 1})`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);

    // Listen for hoverable elements
    const hoverables = document.querySelectorAll("a, button, [data-cursor-hover], input, textarea");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    const raf = requestAnimationFrame(animate);

    // Re-scan for new hoverable elements periodically
    const rescan = setInterval(() => {
      const els = document.querySelectorAll("a, button, [data-cursor-hover], input, textarea");
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    }, 2000);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      clearInterval(rescan);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, [hovering]);

  if (hidden) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          borderRadius: "50%",
          backgroundColor: "#00d4ff",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          borderRadius: "50%",
          border: "1.5px solid rgba(0, 212, 255, 0.4)",
          transition: "transform 0.2s cubic-bezier(0.22,1,0.36,1), border-color 0.3s",
          borderColor: hovering ? "rgba(124, 58, 237, 0.6)" : "rgba(0, 212, 255, 0.4)",
        }}
      />
    </>
  );
};

export default CustomCursor;
