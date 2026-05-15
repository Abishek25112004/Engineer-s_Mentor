import { useCallback } from "react";

/**
 * 3D tilt effect on mouse move.
 * Returns onMouseMove and onMouseLeave handlers to apply to an element.
 * @param {number} maxTilt - Maximum tilt in degrees (default 8)
 * @param {number} perspective - Perspective value in px (default 1000)
 */
export function useTilt(maxTilt = 8, perspective = 1000) {
  const handleMouseMove = useCallback((e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    el.style.transition = "transform 0.1s ease-out";
  }, [maxTilt, perspective]);

  const handleMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    e.currentTarget.style.transition = "transform 0.5s ease-out";
  }, [perspective]);

  return { handleMouseMove, handleMouseLeave };
}
