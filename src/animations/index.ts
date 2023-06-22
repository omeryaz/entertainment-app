export const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
};

export const trendingContainerVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
  hidden: { opacity: 0 },
};

export const trendingVariants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: { opacity: 0, x: -30 },
};
