export const fadeIn = (
  direction: "up" | "down",
  type: "spring" | "tween",
  delay: number,
  duration: number,
  opacity: number = 1
) => {
  return {
    hidden: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: opacity,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: "up" | "down" | "left" | "right",
  type: "spring" | "tween",
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
    quit: {
      x: direction === "left" ? "150%" : direction === "right" ? "-150%" : 0,
      y: direction === "up" || direction === "down" ? "150%" : 0,
      transition: {
        type: type,
        delay: delay / 2,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
