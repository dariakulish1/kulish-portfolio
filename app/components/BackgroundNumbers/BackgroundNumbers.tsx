"use client";

import { useEffect, useState } from "react";
import "./BackgroundNumbers.scss";

function BackgroundNumbers() {
  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => {
    const getPageHeight = () =>
      Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.offsetHeight
      );

    const generateNumbers = () => {
      const pageHeight = getPageHeight();
      const spacing = 40;
      const count = Math.ceil(pageHeight / spacing) + 2;

      setNumbers(Array.from({ length: count }, (_, i) => i + 1));
    };

    generateNumbers();

    const resizeObserver = new ResizeObserver(generateNumbers);
    resizeObserver.observe(document.documentElement);
    resizeObserver.observe(document.body);

    window.addEventListener("resize", generateNumbers);
    window.addEventListener("load", generateNumbers);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", generateNumbers);
      window.removeEventListener("load", generateNumbers);
    };
  }, []);

  return (
    <div className="background-numbers">
      {numbers.map((num) => (
        <span key={num}>{num}</span>
      ))}
    </div>
  );
}

export default BackgroundNumbers;