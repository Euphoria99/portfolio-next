'use client';
import React from "react";
import IconLogo from "../sub-components/icon";
import Link from "next/link";
import { motion } from 'framer-motion'


const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <IconLogo />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[15px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1 }}>Home</motion.li>
            </Link>
            {/*-About-*/}
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }}>
                <span className="text-textColor">01.</span> About
              </motion.li>
            </Link>
            {/*-Experience-*/}
            <Link
              href="#experience"
              className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }}>
              <span className="text-textColor">02.</span>Experience
              </motion.li>
            </Link>
            {/*-Project-*/}
            <Link
              href="#projects"
              className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }}>
              <span className="text-textColor">03.</span> Projects
              </motion.li>
            </Link>
            {/*-Contact-*/}
            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }}>
              <span className="text-textColor">04.</span> Contact
              </motion.li>
            </Link>
          </ul>
          {/*-Resume button-*/}
          <a href="/assets/resume.pdf" target="_blank">
          <motion.button 
          initial={{opacity: 0 }} 
          animate={{opacity: 1 }} 
          transition={{delay: 0.5 }} 
          className="px-4 py-2 rounded-md text-textColor text-[15px] border border-textColor hover:bg-bodyColor duration-300"
          >Resume
          </motion.button>
          </a>
        </div>
        {/*menu icon */}
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textColor cursor-pointer overflow-hidden group">
            <span className="w-full h-[2px] bg-textColor inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textColor inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textColor inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
