"use client";

import React from "react";
import { motion, MotionProps } from "motion/react";

interface PirateCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// 1. Ship Floating & Bobbing Motion (Galleon on High Seas)
export const PirateShipFloat: React.FC<PirateCardProps> = ({
  children,
  className = "",
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      animate={{
        y: [-4, 6, -4],
        rotate: [-1.2, 1.2, -1.2],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// 2. Scroll Unfurl Reveal (Parchment Map Unroll)
export const PirateScrollReveal: React.FC<PirateCardProps> = ({
  children,
  className = "",
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// 3. Interactive Pirate Card (Compass Rise & Gold Glow)
export const PirateInteractiveCard: React.FC<PirateCardProps> = ({
  children,
  className = "",
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// 4. Ship Wheel / Compass Spin Motion
export const PirateSpinWheel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
