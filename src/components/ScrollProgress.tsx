import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 shadow-[0_0_15px_rgba(56,189,248,0.8)]"
    />
  );
}