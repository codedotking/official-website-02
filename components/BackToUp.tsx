"use client";
import { useScroll } from "ahooks";
import { useEffect, useRef, useState } from "react";
export default function BackToUp() {
  const scroll = useScroll(document);
  const lastScrollTop = useRef(0);
  const [showVisible, setShowVisible] = useState(false);
  useEffect(() => {
    if (!scroll) return;
    setShowVisible(
      scroll.top > lastScrollTop.current ? false : scroll.top > 200
    );
    lastScrollTop.current = scroll.top;
  }, [scroll]);
  return (
    showVisible && (
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="scroll-top show show-active">
        <i className="arrow-top fas fa-angle-double-up"></i>
        <i className="arrow-bottom fas fa-angle-double-up"></i>
      </div>
    )
  );
}
