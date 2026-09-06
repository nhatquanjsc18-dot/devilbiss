"use client";

import { motion } from "framer-motion";

export default function FloatingCta() {
  return (
    <motion.a
      href="tel:0908050415"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-card"
    >
      📞 Gọi ngay tư vấn
    </motion.a>
  );
}
