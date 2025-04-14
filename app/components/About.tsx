"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "./HigherOrderComponents";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// New animation variants
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{ max: 15, scale: 1.05, speed: 500 }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        className="w-full bg-gradient-to-br from-purple-500 to-pink-600 p-[1px] rounded-2xl shadow-lg"
      >
        <div className="bg-gray-900 rounded-2xl py-6 px-8 min-h-[280px] flex flex-col items-center justify-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={icon}
              width={72}
              height={72}
              alt={title}
              className="w-18 h-18 object-contain"
            />
          </motion.div>
          <h3 className="text-white text-xl font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="mb-12"
      >
        <p className="text-sm uppercase tracking-wider text-pink-400 mb-2">
          Introduction
        </p>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Overview.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-20"
      >
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
          <span className="text-2xl">🚀</span> Full-Stack Software Engineer | Java | React.js | AWS Certified<br/>
          <span className="text-2xl">👨‍💻</span> Passionate about building scalable backend systems and intuitive frontends<br/>
          <span className="text-2xl">📊</span> Experienced with SQL, Oracle DB, and cloud-native applications on AWS & GCP<br/>
          <span className="text-2xl">📦</span> Building APIs | Automating with CI/CD | Shipping real-world features<br/>
          <span className="text-2xl">💡</span> Always learning | Currently exploring: GraphQL, Redis, and system design
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");