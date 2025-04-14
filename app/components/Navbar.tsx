"use client";
import { navLinks } from "@/app/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`paddingX w-full flex items-center py-5 fixed top-0 z-50 ${
        scrolled 
          ? "bg-primary/90 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo/Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Link href="https://github.com/29shivam" passHref>
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="logo"
              priority
              className="object-contain hover:rotate-[15deg] transition-transform duration-300"
            />
          </Link>
          <p className="text-white text-lg font-bold flex">
            Shivam Singh <span className="sm:block hidden ml-2 opacity-70">| 29shivam</span>
          </p>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {navLinks.map((nav) => (
            <li 
              key={nav.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(nav.id)}
              onMouseLeave={() => setHoveredItem("")}
            >
              <Link href={`#${nav.id}`}>
                <motion.div
                  className={`px-3 py-2 rounded-lg ${
                    active === nav.title 
                      ? "text-white font-semibold" 
                      : "text-gray-300 hover:text-white"
                  } transition-colors duration-200`}
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                  {hoveredItem === nav.id && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500"
                      layoutId="navHover"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                </motion.div>
              </Link>
            </li>
          ))}
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ResumeButton />
          </motion.li>
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-800/50"
          >
            <Image
              src={toggle ? "/close.svg" : "/menu.svg"}
              width={24}
              height={24}
              alt="menu"
              className="w-6 h-6 object-contain"
              onClick={() => setToggle(!toggle)}
            />
          </motion.div>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                className="p-6 bg-gray-900/95 backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-50 rounded-xl shadow-2xl border border-gray-700"
              >
                <ul className="list-none flex flex-col gap-4">
                  {navLinks.map((nav) => (
                    <motion.li
                      key={nav.id}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className={`font-medium cursor-pointer text-lg ${
                        active === nav.title 
                          ? "text-purple-400" 
                          : "text-gray-300"
                      } transition-colors`}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                    >
                      <Link href={`#${nav.id}`}>{nav.title}</Link>
                    </motion.li>
                  ))}
                  <motion.li 
                    variants={itemVariants}
                    className="mt-4"
                  >
                    <ResumeButton />
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;