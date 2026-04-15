"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type CursorMode = "default" | "link" | "drag" | "view";

/**
 * Custom magnetic cursor. Follows pointer with spring physics.
 * On elements with `data-cursor="link|drag|view"`, grows + changes label.
 * Disabled on touch devices + reduced-motion users.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const spring = { damping: 24, stiffness: 320, mass: 0.6 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  useEffect(() => {
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasHover || reduce) return;

    setEnabled(true);
    document.body.setAttribute("data-cursor-enabled", "true");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      if (t) {
        const m = (t.dataset.cursor as CursorMode) || "default";
        setMode(m);
      } else {
        setMode("default");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.body.removeAttribute("data-cursor-enabled");
    };
  }, [visible, x, y]);

  if (!enabled) return null;

  const sizeByMode: Record<CursorMode, number> = {
    default: 14,
    link: 64,
    drag: 72,
    view: 84,
  };
  const labelByMode: Record<CursorMode, string> = {
    default: "",
    link: "Open",
    drag: "Drag",
    view: "View",
  };

  const size = sizeByMode[mode];
  const label = labelByMode[mode];

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] flex items-center justify-center rounded-full mix-blend-difference"
        style={{
          x: sx,
          y: sy,
          width: size,
          height: size,
          translateX: "-50%",
          translateY: "-50%",
          background: "#F2EDE4",
          opacity: visible ? 1 : 0,
          transition: "width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), opacity 0.2s",
        }}
      >
        <AnimatePresence mode="wait">
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#1A1815]"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
