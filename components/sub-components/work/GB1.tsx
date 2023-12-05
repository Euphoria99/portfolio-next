'use-client'

import { motion } from 'framer-motion';
import { AiTwotoneThunderbolt } from "react-icons/ai";

const GB1 = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{ delay: 0.1 }}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Web Developer <span className='text-textColor tracking-wide'>@GB1</span></h3>
        <p className='text=sm mt-1 font-medium text-textDark'>Aug 2022 - present</p>
        <ul className='mt-6 flex flex-col gap-3'>
            <li className='text-base flex gap-2 text-textDark '>
                <span className='text-textColor mt-1'>
                    <AiTwotoneThunderbolt />
                </span>
                Write modern, performant, maintainable code for a diverse array of client and internal projects
            </li>
            <li className='text-base flex gap-2 text-textDark '>
                <span className='text-textColor mt-1'>
                    <AiTwotoneThunderbolt />
                </span>
                Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify
            </li>
            <li className='text-base flex gap-2 text-textDark '>
                <span className='text-textColor mt-1'>
                    <AiTwotoneThunderbolt />
                </span>
                Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
            </li>
        </ul>
    </motion.div>
  )
}

export default GB1
// 