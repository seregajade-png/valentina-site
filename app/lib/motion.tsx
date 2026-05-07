"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";
import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import Lenis from "lenis";
import NextImage from "next/image";

/* ───── prefers-reduced-motion ───── */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

/* ───── Smooth scroll (Lenis) ───── */

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduced]);
  return <>{children}</>;
}

/* ───── Reveal: fade + Y on enter ───── */

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.8,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "header" | "h1" | "h2" | "h3" | "p" | "span";
}) {
  const Comp = motion[Tag] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: REVEAL_EASE }}
    >
      {children}
    </Comp>
  );
}

/* ───── Stagger reveal: parent + items ───── */

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: REVEAL_EASE } },
};

export function RevealStagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div className={className} style={style} variants={staggerChild}>
      {children}
    </motion.div>
  );
}

/* ───── Image slow-zoom (parallax-zoom) ───── */

export function ImageZoom({
  children,
  className,
  amount = 0.08,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + amount]);
  return (
    <div ref={ref} className={className} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        style={
          reduced
            ? { width: "100%", height: "100%", position: "absolute", inset: 0 }
            : { scale, width: "100%", height: "100%", position: "absolute", inset: 0, willChange: "transform" }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ───── Clip-path mask reveal (BAMO style) ───── */

export function ClipReveal({
  children,
  className,
  duration = 1.1,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div ref={ref} className={className}>{children}</div>;
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
      transition={{ duration, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ───── MotionPhoto: clip-reveal + slow zoom + tint, all-in-one ───── */

export function MotionPhoto({
  src,
  alt,
  sizes = "(max-width: 980px) 100vw, 60vw",
  zoom = 0.08,
  priority = false,
  tint = true,
  clip = true,
}: {
  src: string;
  alt: string;
  sizes?: string;
  zoom?: number;
  priority?: boolean;
  tint?: boolean;
  clip?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + zoom]);

  const useClip = clip && !reduced;

  return (
    <motion.div
      ref={ref}
      className={`absolute inset-0 ${tint ? "vl-tint" : ""}`}
      initial={useClip ? { clipPath: "inset(100% 0% 0% 0%)" } : undefined}
      animate={useClip ? (inView ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined) : undefined}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        style={reduced ? undefined : { scale, willChange: "transform" }}
      >
        <NextImage src={src} alt={alt} fill sizes={sizes} className="object-cover" priority={priority} />
      </motion.div>
    </motion.div>
  );
}

/* ───── Magnetic button ───── */

export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      x.set(dx * strength);
      y.set(dy * strength);
    };
    const onLeave = () => {
      x.set(0);
      y.set(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, x, y]);

  return (
    <div ref={ref} className={className} style={{ display: "inline-flex" }}>
      <motion.div style={{ x: sx, y: sy }}>{children}</motion.div>
    </div>
  );
}

/* ───── Custom cursor (NStudio-style) ───── */

export function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 35, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 400, damping: 35, mass: 0.3 });

  useEffect(() => {
    if (reduced) return;
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const isInteractive = !!t?.closest("a, button, [role='button'], summary, input, select, textarea, [data-cursor='hover']");
      setHovering(isInteractive);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.classList.add("vl-cursor-on");
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("vl-cursor-on");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <AnimatePresence>
      <motion.div
        aria-hidden
        className="vl-cursor"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 56 : 12,
          height: hovering ? 56 : 12,
          backgroundColor: hovering ? "rgba(217,205,184,0.18)" : "rgba(217,205,184,1)",
          borderColor: hovering ? "rgba(217,205,184,0.9)" : "rgba(217,205,184,0)",
          mixBlendMode: hovering ? "normal" : "difference",
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </AnimatePresence>
  );
}
