"use client";

import { useEffect, useRef } from "react";

export default function CursorTracker() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let rafId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    };

    const setHover = (on: boolean) => {
      if (on) {
        ring.style.width          = "52px";
        ring.style.height         = "52px";
        ring.style.marginLeft     = "-26px";
        ring.style.marginTop      = "-26px";
        ring.style.borderColor    = "rgba(63,140,255,0.8)";
        ring.style.backgroundColor = "rgba(63,140,255,0.07)";
      } else {
        ring.style.width          = "36px";
        ring.style.height         = "36px";
        ring.style.marginLeft     = "-18px";
        ring.style.marginTop      = "-18px";
        ring.style.borderColor    = "rgba(63,140,255,0.45)";
        ring.style.backgroundColor = "transparent";
      }
    };

    const onEnter = () => setHover(true);
    const onLeave = () => setHover(false);

    const bindLinks = () =>
      document.querySelectorAll("a, button").forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });

    const unbindLinks = () =>
      document.querySelectorAll("a, button").forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });

    bindLinks();
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      rx = lerp(rx, mx, 0.1);
      ry = lerp(ry, my, 0.1);
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      unbindLinks();
    };
  }, []);

  return (
    <>
      {/* Dot — snaps instantly to cursor */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          width:           8,
          height:          8,
          borderRadius:    "50%",
          backgroundColor: "#3f8cff",
          marginLeft:      -4,
          marginTop:       -4,
          pointerEvents:   "none",
          zIndex:          9999,
          willChange:      "transform",
        }}
      />

      {/* Ring — lags behind, morphs on hover */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          width:           36,
          height:          36,
          borderRadius:    "50%",
          border:          "1.5px solid rgba(63,140,255,0.45)",
          backgroundColor: "transparent",
          marginLeft:      -18,
          marginTop:       -18,
          pointerEvents:   "none",
          zIndex:          9998,
          willChange:      "transform",
          transition:      "width 200ms ease, height 200ms ease, margin 200ms ease, border-color 200ms ease, background-color 200ms ease",
        }}
      />
    </>
  );
}
