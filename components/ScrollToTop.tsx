"use client";

import { useEffect, useState } from "react";
import { FaArrowUp   } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        h-12 w-12 flex items-center justify-center
        rounded-full
        bg-[#f06500] text-#2c2c2c
        shadow-lg transition-all duration-300
        hover:bg-[#fd8606] hover:scale-105
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
      `}
    >
      <FaArrowUp   size={18} />
    </button>
  );
}
