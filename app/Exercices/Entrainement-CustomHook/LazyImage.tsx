"use client";
import { useIntersectionObserver } from "./useIntersectionObserver";

export const LazyImage = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      {isIntersecting ? (
        <img src="/og-image.png" alt="Lazy loaded" />
      ) : (
        <div className="placeholder">Loading...</div>
      )}
    </div>
  );
};
