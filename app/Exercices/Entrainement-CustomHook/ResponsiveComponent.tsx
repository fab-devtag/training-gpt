"use client";
import { useWindowSize } from "./useWindowSize";

export const ResponsiveComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>
        Window size: {width} x {height}
      </p>
      {width < 768 && <p>Mobile view</p>}
      {width >= 768 && width < 1024 && <p>Tablet view</p>}
      {width >= 1024 && <p>Desktop view</p>}
    </div>
  );
};
