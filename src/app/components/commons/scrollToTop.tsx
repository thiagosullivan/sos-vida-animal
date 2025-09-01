"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { IoMdArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 20;
      const isScrolled = window.scrollY > scrollThreshold;
      setShowScroll(isScrolled);
    };

    let ticking = false;
    const debouncedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", debouncedScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScroll && (
        <Button
          onClick={scrollToTop}
          className="scrollBtn bg-gray-primary border-2 border-gray-primary hover:bg-orange-secondary transition delay-50 duration-150 ease-in-out"
        >
          <IoMdArrowUp />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
