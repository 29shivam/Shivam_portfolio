"use client";
import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const CanvasLoader = () => {
  const { progress } = useProgress();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const loaderVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const progressVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <Html center>
      <motion.div
        className="flex flex-col items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated 3D-looking loader */}
        <motion.div
          variants={loaderVariants}
          className="relative w-20 h-20 mb-4"
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent"
            style={{
              borderImage: "linear-gradient(135deg, #915EFF, #4D22E6) 1",
              boxShadow: "0 0 20px rgba(145, 94, 255, 0.5)"
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Inner spinner */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full"
            style={{
              background: "conic-gradient(transparent, #915EFF)",
              transformOrigin: "center",
              marginLeft: "-32px",
              marginTop: "-32px"
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-[#1d1836]"
            style={{
              marginLeft: "-16px",
              marginTop: "-16px",
              boxShadow: "inset 0 0 10px rgba(145, 94, 255, 0.5)"
            }}
          />
        </motion.div>

        {/* Progress text with glow */}
        <motion.p
          variants={progressVariants}
          className="text-2xl font-bold text-white"
          style={{
            textShadow: "0 0 10px rgba(145, 94, 255, 0.7)"
          }}
        >
          {progress.toFixed(0)}%
        </motion.p>

        {/* Additional loading message with typing effect */}
        <motion.p
          className="text-gray-400 mt-2 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading amazing 3D experience...
        </motion.p>

        {/* Progress bar */}
        <motion.div 
          className="w-40 h-1 bg-gray-800 rounded-full mt-4 overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "10rem" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#915EFF] to-[#4D22E6]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </Html>
  );
};

export default CanvasLoader;