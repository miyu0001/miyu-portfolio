"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setDot({ x: e.clientX, y: e.clientY });
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", move);

    const links = document.querySelectorAll("a, button, [data-hover]");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#C4654A] mix-blend-multiply"
        animate={{
          x: pos.x - (hovered ? 20 : 16),
          y: pos.y - (hovered ? 20 : 16),
          width: hovered ? 40 : 32,
          height: hovered ? 40 : 32,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 28, mass: 0.5 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-[#C4654A]"
        animate={{ x: dot.x - 3, y: dot.y - 3 }}
        transition={{ type: "spring", stiffness: 800, damping: 40 }}
      />
    </>
  );
}
