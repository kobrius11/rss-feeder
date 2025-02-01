"use client"

import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
}

export default function FadeInSection({ children }: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = domRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(node);
    return () => {
        if (node) observer.unobserve(node);
    }
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}
