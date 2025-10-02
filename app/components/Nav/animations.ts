import { Variants, useReducedMotion } from "framer-motion";

export function useDesktopPanelVariants(): Variants {
  const reduce = useReducedMotion();
  if (reduce) {
    return {
      initial: { clipPath: "inset(0 0 0 0 round 8px)" },
      animate: { clipPath: "inset(0 0 0 0 round 8px)" },
      exit: { clipPath: "inset(0 0 0 0 round 8px)" },
    };
  }
  return {
    initial: { clipPath: "inset(0 100% 0 0 round 8px)" },
    animate: {
      clipPath: "inset(0 0% 0 0 round 8px)",
      transition: {
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.04,
      },
    },
    exit: {
      clipPath: "inset(0 100% 0 0 round 8px)",
      transition: {
        duration: 0.22,
        ease: [0.4, 0, 0.2, 1],
        when: "afterChildren",
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };
}

export function useDesktopItemVariants(): Variants {
  const reduce = useReducedMotion();
  if (reduce)
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    };
  return {
    initial: { opacity: 0, x: -12 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "tween", duration: 0.14 },
    },
    exit: { opacity: 0, x: -8, transition: { type: "tween", duration: 0.1 } },
  };
}

export function useMobilePanelVariants(): Variants {
  const reduce = useReducedMotion();
  if (reduce) {
    return {
      collapsed: { height: 0, opacity: 0 },
      expanded: { height: "auto", opacity: 1 },
    };
  }
  return {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.18,
        ease: [0.4, 0, 0.2, 1],
        when: "afterChildren",
      },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
}

export function useMobileListVariants(): Variants {
  const reduce = useReducedMotion();
  if (reduce) {
    return {
      collapsed: {},
      expanded: {},
    };
  }
  return {
    collapsed: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
    expanded: {
      transition: {
        delayChildren: 0.04,
        staggerChildren: 0.08,
      },
    },
  };
}

export function useMobileItemVariants(): Variants {
  const reduce = useReducedMotion();
  if (reduce)
    return {
      collapsed: { opacity: 0 },
      expanded: { opacity: 1 },
    };
  return {
    collapsed: { opacity: 0, y: -6 },
    expanded: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.12 },
    },
    exit: { opacity: 0, y: -6, transition: { type: "tween", duration: 0.1 } },
  };
}
