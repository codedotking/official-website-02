"use client";
import { useEffect } from "react";

export default function BackgroundProvider() {
  useEffect(() => {
    // Set background images
    const bgImageElements = document.querySelectorAll("[data-bg-image]");
    bgImageElements.forEach((element) => {
      const el = element as HTMLElement; // Cast to HTMLElement
      const imageUrl = el.getAttribute("data-bg-image");
      if (imageUrl) {
        el.style.backgroundImage = `url(${imageUrl})`;
      }
    });
    // Set background colors
    const bgColorElements = document.querySelectorAll("[data-bg-color]");
    bgColorElements.forEach((element) => {
      const el = element as HTMLElement; // Cast to HTMLElement
      const color = el.getAttribute("data-bg-color");
      if (color) {
        el.style.backgroundColor = color;
      }
    });
  }, []);
  return null;
}
