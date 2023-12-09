import React from 'react'
import SectionTitle from '../sub-components/SectionTitle'
import Image from "next/image";
import { chatApp } from '@/public/assets';

import { VscGithubInverted } from "react-icons/vsc";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <section
            id="project"
            className='max-w-container mx-auto lgl:px-20 py-24'
        >
            <SectionTitle title="Projects" titleNo="03" />
            <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
                {/* 1st project */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <a
                            className='w-full xl:w-1/2 h-auto relative group'
                            href="https://github.com/Euphoria99"
                            target="_blank"
                        >
                            <div>
                                <Image
                                    className="w-full h-full object-contain"
                                    src={chatApp}
                                    alt="chat app"
                                />
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10'>
                            <p className='font-titleFont text-textColor text-sm tracking-wide'>
                                Featured Project
                            </p>
                            <h3 className='text-2xl font-bold'>
                                Echowave: A Chat App
                            </h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 xl:-ml-16 md:p-2 rounded-md'>
                                Real-time chat application built with <span className='text-textColor'>MongoDB</span>, <span className='text-textColor'>Express</span>, <span className='text-textColor'>React</span>, and  <span className='text-textColor'>Node.js</span>.
                                It uses WebSocket technology to provide instant messaging capabilities {" "}
                            </p>
                            <ul className='text-sx md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>MongoDB</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Websockets</li>
                                <li>Tailwind.css</li>
                            </ul>
                            <div className='text-2xl flex gap-4'>
                                <a className='hover:text-textColor duration-300 hover:-translate-y-2 transition-all' href="https://github.com/Euphoria99"><VscGithubInverted /></a>
                                <a className='hover:text-textColor duration-300 hover:-translate-y-2 transition-all' href="https://github.com/Euphoria99"><FaExternalLinkAlt /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd project */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row-reverse gap-6'>
                        <a
                            className='w-full xl:w-1/2 h-auto relative group'
                            href="https://github.com/Euphoria99"
                            target="_blank"
                        >
                            <div>
                                <Image
                                    className="w-full h-full object-contain"
                                    src={chatApp}
                                    alt="chat app"
                                />
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10'>
                            <p className='font-titleFont text-textColor text-sm tracking-wide'>
                                Featured Project
                            </p>
                            <h3 className='text-2xl font-bold'>
                                Echowave: A Chat App
                            </h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-2 rounded-md'>
                                Real-time chat application built with <span className='text-textColor'>MongoDB</span>, <span className='text-textColor'>Express</span>, <span className='text-textColor'>React</span>, and  <span className='text-textColor'>Node.js</span>.
                                It uses WebSocket technology to provide instant messaging capabilities {" "}
                            </p>
                            <ul className='text-sx md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>MongoDB</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Websockets</li>
                                <li>Tailwind.css</li>
                            </ul>
                            <div className='text-2xl flex gap-4'>
                                <a className='hover:text-textColor duration-300 hover:-translate-y-2 transition-all' href="https://github.com/Euphoria99"><VscGithubInverted /></a>
                                <a className='hover:text-textColor duration-300 hover:-translate-y-2 transition-all' href="https://github.com/Euphoria99"><FaExternalLinkAlt /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3rd project */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <a
                            className='w-full xl:w-1/2 h-auto relative group'
                            href="https://github.com/Euphoria99"
                            target="_blank"
                        >
                            <div>
                                <Image
                                    className="w-full h-full object-contain"
                                    src={chatApp}
                                    alt="chat app"
                                />
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10'>
                            <p className='font-titleFont text-textColor text-sm tracking-wide'>
                                Featured Project
                            </p>
                            <h3 className='text-2xl font-bold'>
                                Echowave: A Chat App
                            </h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 xl:-ml-16 md:p-2 rounded-md'>
                                Real-time chat application built with <span className='text-textColor'>MongoDB</span>, <span className='text-textColor'>Express</span>, <span className='text-textColor'>React</span>, and  <span className='text-textColor'>Node.js</span>.
                                It uses WebSocket technology to provide instant messaging capabilities {" "}
                            </p>
                            <ul className='text-sx md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>MongoDB</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Websockets</li>
                                <li>Tailwind.css</li>
                            </ul>
                            <div className='text-2xl flex gap-4'>
                                <a className='hover:text-textColor duration-300 hover:-translate-y-2 transition-all' href="https://github.com/Euphoria99"><VscGithubInverted /></a>
                                <a className='hover:text-textColor duration-300 hover:-translate-y-2 transition-all' href="https://github.com/Euphoria99"><FaExternalLinkAlt /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects