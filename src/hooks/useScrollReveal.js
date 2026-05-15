import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-triggered animation hook.
 * @param {React.RefObject} ref - Container element ref
 * @param {string} selector - CSS selector for child elements to animate
 * @param {object} options - Animation options
 */
export function useScrollReveal(ref, selector = ".reveal", options = {}) {
  const {
    y = 60,
    x = 0,
    rotateX = 0,
    opacity = 0,
    scale = 1,
    duration = 0.9,
    stagger = 0.12,
    ease = "power3.out",
    start = "top 85%",
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll(selector);
    if (!elements.length) return;

    gsap.set(elements, { y, x, rotateX, opacity, scale });

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start,
      onEnter: () => {
        gsap.to(elements, {
          y: 0,
          x: 0,
          rotateX: 0,
          opacity: 1,
          scale: 1,
          duration,
          stagger,
          ease,
        });
      },
      once: true,
    });

    return () => trigger.kill();
  }, [ref, selector]);
}

/**
 * Parallax scroll effect hook.
 * @param {React.RefObject} ref - Element to apply parallax
 * @param {number} speed - Parallax speed multiplier (negative = opposite direction)
 */
export function useParallax(ref, speed = 0.3) {
  useEffect(() => {
    if (!ref.current) return;

    const tl = gsap.to(ref.current, {
      y: () => speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [ref, speed]);
}
