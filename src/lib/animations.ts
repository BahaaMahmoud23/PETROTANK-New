import type { Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

// ── Shared viewport presets ───────────────────────────────
export const viewport     = { once: true, amount: 0.25 } as const;
export const viewportLazy = { once: true, amount: 0.12 } as const;

// ── FadeUp — primary scroll reveal ───────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

// ── FadeIn — pure opacity for subtle secondary elements ───
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

// ── Stagger containers ────────────────────────────────────
export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export const staggerSm: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

// ── Slide variants (RTL-awareness handled at call site) ───
export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
};

export const slideRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
};

// ── ImageReveal — scale + fade + lift for image containers
export const imageReveal: Variants = {
  hidden:  { opacity: 0, scale: 1.04, y: 24 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 1.1, ease } },
};
