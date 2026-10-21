import type { Transition, Variants } from "framer-motion";

export const motionEasing = [0.16, 1, 0.3, 1] as const;

export const motionViewport = {
  once: true,
  amount: 0.2,
} as const;

export const softSpring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.9,
};

export function staggerContainer(
  staggerChildren = 0.12,
  delayChildren = 0
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

export function fadeInUp(distance = 28, delay = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.72,
        ease: motionEasing,
        delay,
      },
    },
  };
}

export function fadeInHorizontal(
  distance = 32,
  delay = 0,
  direction: "left" | "right" = "right"
): Variants {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -distance : distance,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.72,
        ease: motionEasing,
        delay,
      },
    },
  };
}

export function expandHeightIn(delay = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      height: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        height: {
          duration: 0.7,
          ease: motionEasing,
          delay,
        },
        opacity: {
          duration: 0.35,
          delay: delay + 0.08,
        },
        y: {
          duration: 0.6,
          ease: motionEasing,
          delay,
        },
      },
    },
  };
}

export function clipRevealUp(delay = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 30,
      clipPath: "inset(100% 0 0 0)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0 0 0)",
      transition: {
        clipPath: {
          duration: 0.8,
          ease: motionEasing,
          delay,
        },
        opacity: {
          duration: 0.35,
          delay: delay + 0.05,
        },
        y: {
          duration: 0.65,
          ease: motionEasing,
          delay,
        },
      },
    },
  };
}
