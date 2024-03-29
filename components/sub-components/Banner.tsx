'use client'
import { motion } from 'framer-motion'
import { bioData } from "../../datasource"

const Banner = () => {
    return (
        <section
            id="home"
            className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'
        >
            <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className='text-lg font-titleFont tracking-wide text-textColor'>
                Hi, My name is
            </motion.h3>
            <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-4xl lgl:text-6xl font-titleFont font-semibold flex-col'
            >
                {bioData.name} <br /><span className='text text-textDark mt-2 lgl:mt-4'>{bioData.tagLine}</span>
            </motion.h1>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className='text-base md:max-x-[650px] text-textDark font-medium'>
                {" "}
                <p dangerouslySetInnerHTML={{ __html: bioData.summary }} />
                {" "}
                <br />
                <a href={`mailto:${bioData.email}`}>
                    <span className='text-textColor inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>
                        Learn More
                        <span className='absolute w-full h-[1px] bg-textColor left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
                    </span>
                </a>
            </motion.div>
            <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className='w-52 h-14 text-sm font-titleFont border border-textColor rounded-md text-textColor tracking-wide hover:bg-hoverColor duration-300'
            >
                Get In Touch
            </motion.button>
        </section>
    )
}

export default Banner