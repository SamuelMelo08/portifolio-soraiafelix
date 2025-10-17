"use client"

import { motion } from "motion/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: "top" | "bottom";
  onAnimationComplete?: () => void;
}

export default function BlurText({
  text,
  className = "",
  delay = 0.2,
  direction = "top",
  onAnimationComplete,
}: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.p
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === "top" ? -40 : 40,
        filter: "blur(10px)",
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.8,
                delay,
                ease: "easeOut",
              },
            }
          : {}
      }
      onAnimationComplete={onAnimationComplete}
      style={{ willChange: "transform, filter, opacity" }}
      className={`${fraunces.className} ${className}`}
    >
      {text}
    </motion.p>
  );
}
