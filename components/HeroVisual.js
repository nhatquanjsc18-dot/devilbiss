"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-full max-w-md"
    >
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full"
      >
        <Image
          src="/images/products/dekups-evo.webp"
          alt="Devilbiss DeKups EVO"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 480px"
          className="object-contain drop-shadow-2xl"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 rounded-full bg-primary/25 blur-3xl" />
    </motion.div>
  );
}
