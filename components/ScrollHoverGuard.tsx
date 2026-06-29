"use client";

import { useEffect } from "react";

/**
 * Disables hover effects while the page is actively scrolling.
 *
 * Without this, scrolling with the cursor resting over a grid makes each card
 * fire its hover-lift as the pointer crosses it, producing a flickering cascade.
 * We add `is-scrolling` to <body> during scroll and remove it shortly after the
 * scroll settles (see the `body.is-scrolling *` rule in globals.css).
 */
export default function ScrollHoverGuard() {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      document.body.classList.add("is-scrolling");
      clearTimeout(timer);
      timer = setTimeout(() => {
        document.body.classList.remove("is-scrolling");
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return null;
}
