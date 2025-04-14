"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";

const dancingVariants = {
  animate: {
    y: [0, -10, 0, 10, 0], // up, back to center, down, back
    rotate: [0, 5, -5, 5, 0], // little wiggle
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <motion.div
          className="w-28 h-28"
          key={technology.name}
          variants={dancingVariants}
          animate="animate"
          whileHover={{ scale: 1.1 }}
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
