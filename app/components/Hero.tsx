"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Typewriter } from 'react-simple-typewriter';
import FloatingTorusCanvas from "./canvas/FloatingTorusCanvas";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen mx-auto overflow-hidden"
    >
      {/* Background Parallax Grid */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-black/90 dark:from-white/10 dark:to-black/80" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10 dark:opacity-20" />
      </motion.div>

      {/* Text + 3D Layout */}
      <div className="paddingX absolute inset-0 top-[140px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 z-10">
        {/* Left Vertical Line */}
        <div className="hidden md:flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-4 h-4 rounded-full bg-[#915EFF] shadow-[0_0_25px_#915EFF]"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "60vh" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-1 h-40 md:h-80 violet-gradient"
          />
        </div>

        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="heroHeadText text-white">
            Hi, I&apos;m{" "}
            <span className="text-[#915EFF] animate-pulse drop-shadow-md">
              Shivam
            </span>
          </h1>

          <motion.p
            className="heroSubText mt-1 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 dark:from-purple-300 dark:to-pink-400">
              Software Engineer
            </span>
          </motion.p>

          {/* Summary Bullets */}
          <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 0.8 }}
  className="mt-6 max-w-2xl text-[17px] leading-[28px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
>
  <Typewriter
    words={[
      "I'm a Master's student in Computer Science at Illinois Institute of Technology, graduating in May 2025, and actively seeking full-time Software Engineer roles for 2024–2025. With hands-on experience at Dell, Ericsson, and Chicago Public Schools, I specialize in building scalable front-end and back-end systems using Java, Python, React.js, Spring Boot, and AWS. My work reflects a strong foundation in software development, cloud technologies, and user-centric design, driven by a passion for solving real-world problems through clean and efficient code.",
    ]}
    typeSpeed={25}
    deleteSpeed={0}
    delaySpeed={500}
    cursor
    cursorStyle="|"
  />
</motion.p>



        </motion.div>
      </div>

      {/* 3D Element */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <FloatingTorusCanvas />
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div
        className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center z-10"
        style={{ opacity }}
      >
        <a href="#about">
          <motion.div
            className="w-[42px] h-[64px] rounded-3xl border-2 border-purple-400 flex justify-center items-start p-2 shadow-inner shadow-purple-500/30 hover:shadow-purple-600/40 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, 24, 0], opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="flex flex-col items-center"
            >
              <FiChevronDown className="text-purple-400 text-xl" />
              <div className="w-1 h-4 rounded-full bg-purple-400 mt-1" />
            </motion.div>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
