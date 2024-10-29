"use client";
import React, { useRef, useState } from "react";
import IconLogo from "./icon";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { bioData, allLinks } from "../../datasource";

import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiTwitter } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";

interface homeComp {
  isAtTop: boolean;
}
const Navbar = ({ isAtTop }: homeComp) => {
  const ref = useRef<String | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    //update the class name of the clicked link

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      //do something when clicked
      setShowMenu(false);
    }
  }
  return (
    <div
      className={`w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4 ${isAtTop ? "" : "shadow-navbarShadow"
        }`}
    >
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <Link
          href="#home"
          onClick={handleScroll}
          className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home" onClick={handleScroll}>
              <IconLogo />
            </Link>
          </motion.div>
        </Link>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[15px] gap-7">
            {/*-Home-*/}
            <Link
              href="#home"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            {/*-About-*/}
            <Link
              href="#about"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-textColor"></span> About
              </motion.li>
            </Link>
            {/*-Experience-*/}
            <Link
              href="#experience"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-textColor"></span>Experience
              </motion.li>
            </Link>
            {/*-Project-*/}
            <Link
              href="#projects"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-textColor"></span> Projects
              </motion.li>
            </Link>
            {/* Education */}
            <Link
              href="#education"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-textColor"></span> Education
              </motion.li>
            </Link>
            {/*-Contact-*/}
            <Link
              href="#contact"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-textColor"></span> Contact
              </motion.li>
            </Link>
          </ul>
          {/*-Resume button-*/}
          {bioData.enableResume && (
            <a href={allLinks.resume} target="_blank">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-4 py-2 rounded-md text-textColor text-[15px] border border-textColor hover:bg-hoverColor duration-300"
              >
                Resume
              </motion.button>
            </a>
          )}
        </div>
        {/*menu icon */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textColor cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textColor inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textColor inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textColor inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
            onClick={handleClick}
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-cardColor flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textColor cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  {/*-About-*/}
                  <Link
                    href="#about"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      <span className="text-textColor"></span> About
                    </motion.li>
                  </Link>
                  {/*-Experience-*/}
                  <Link
                    href="#experience"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      <span className="text-textColor"></span>Experience
                    </motion.li>
                  </Link>
                  {/*-Project-*/}
                  <Link
                    href="#projects"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className="text-textColor"></span> Projects
                    </motion.li>
                  </Link>
                  {/*-Education-*/}
                  <Link
                    href="#education"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className="text-textColor"></span> Education
                    </motion.li>
                  </Link>
                  {/*-Contact-*/}
                  <Link
                    href="#contact"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium  text-textDark hover:text-textColor cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      <span className="text-textColor"></span> Contact
                    </motion.li>
                  </Link>
                </ul>
                {bioData.enableResume && (
                  <a href={allLinks.resume} target="_blank">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 px-4 py-2 rounded-md text-textColor text-[15px] border border-textColor hover:bg-bodyColor duration-300"
                    >
                      Resume
                    </motion.button>
                  </a>
                )}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-4 mt-2"
                >
                  {/*github */}
                  <a href={allLinks.github} target="_blank">
                    <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <VscGithubInverted />
                    </span>
                  </a>
                  {/* linkedin*/}
                  <a href={allLinks.linkedIn} target="_blank">
                    <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <FaLinkedinIn />
                    </span>
                  </a>
                  {/*twitter */}
                  <a href={allLinks.twitter} target="_blank">
                    <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SiTwitter />
                    </span>
                  </a>
                  {/* facebook*/}
                  <a href={allLinks.facebook} target="_blank">
                    <span className="w-10 h-10 text-xl bg-bodyColor rounded-full inline-flex items-center justify-center hover: text-textColor cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <FaFacebookSquare />
                    </span>
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-4 mt-2  text-textColor"
                >
                  {bioData.email}
                  </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
