import React from "react";
import SectionTitle from "../sub-components/SectionTitle";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { zhang } from "@/public/assets";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! I'm Pavan, a Software Developer based in Mangalore,India. I
            enjoy creating beautiful and reliable applications for internet and
            phones. My goal is to always build scalable products and performant
            experiences.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2">
            <li className="flex items-center gap-2">
              <span className="text-textColor">
                <HiOutlineRocketLaunch />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textColor">
                <HiOutlineRocketLaunch />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textColor">
                <HiOutlineRocketLaunch />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textColor">
                <HiOutlineRocketLaunch />
              </span>
              Angular
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textColor">
                <HiOutlineRocketLaunch />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textColor">
                <HiOutlineRocketLaunch />
              </span>
              AWS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textColor">
                <HiOutlineRocketLaunch />
              </span>
              Docker
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textColor">
                <HiOutlineRocketLaunch />
              </span>
              Kubernetes
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={zhang}
                alt="profile Image"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textColor/20 
              rounded-md top-0 left-0 group-hover:bg-transparent duration-300">
              </div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textColor
           rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2
           transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
