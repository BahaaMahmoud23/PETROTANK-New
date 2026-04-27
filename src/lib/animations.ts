import type { Variants } from "framer-motion";

// Fade up — primary reveal for all scroll-triggered sections
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Stagger container — wraps cards/lists that reveal one after another
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Tighter stagger for dense grids
export const staggerSm: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
