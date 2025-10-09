import { useState, useEffect } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // TODO: Ajoutez la cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>Largeur: {width}px</div>;
}
