import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NotFound = () => {
  const location = useLocation();
  const textRef = useRef(null);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    // 3D floating animation on 404
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { rotateX: 20, opacity: 0, scale: 0.8 },
        { rotateX: 0, opacity: 1, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
      );
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050a18] relative overflow-hidden">
      <div className="orb orb-cyan w-[400px] h-[400px] top-10 -right-32 opacity-12" />
      <div className="orb orb-violet w-[300px] h-[300px] bottom-20 -left-24 opacity-12" />

      <div className="text-center glass-card rounded-2xl p-14 relative z-10 max-w-md mx-4 perspective-container">
        <h1 ref={textRef} className="text-8xl md:text-[10rem] font-bold gradient-text mb-4 leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          404
        </h1>
        <p className="text-xl text-foreground mb-2 font-semibold">Page not found</p>
        <p className="text-muted-foreground mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-[#050a18] font-bold rounded-xl glow-btn transition-all"
          data-cursor-hover
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
