'use-client';
import React, { useState } from 'react'
import ArchiveCard from '../sub-components/ArchiveCard'
import { motion } from 'framer-motion'


const Archives = () => {

  const [showMore, setShowMore] = useState(false);

  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
        <p className='text-sm font-titleFont text-textColor'>View the archives</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 md:grid-cols xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
        <ArchiveCard title="QrPix-1" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? Voluptas perferendis aspernatur recusandae unde ea eum iusto nemo. Nam rem id minus. Accusantium fuga tempore iure. Porro, nemo adipisci." listItem={["HTML", "CSS", "JavaScript"]} link="https://github.com" />
        <ArchiveCard title="QrPix-2" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? Voluptas perferendis aspernatur recusandae unde ea eum iusto nemo. Nam rem id minus. Accusantium fuga tempore iure. Porro, nemo adipisci." listItem={["HTML", "CSS", "JavaScript"]} link="https://github.com" />
        <ArchiveCard title="QrPix-3" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? Voluptas perferendis aspernatur recusandae unde ea eum iusto nemo. Nam rem id minus. Accusantium fuga tempore iure. Porro, nemo adipisci." listItem={["HTML", "CSS", "JavaScript"]} link="https://github.com" />

        {
          showMore && (
            <>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.1}}
                
            >
               <ArchiveCard title="CGI-1" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? Voluptas perferendis aspernatur recusandae unde ea eum iusto nemo. Nam rem id minus. Accusantium fuga tempore iure. Porro, nemo adipisci." listItem={["HTML", "CSS", "JavaScript"]} link="https://github.com" />
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.2}}
            >
               <ArchiveCard title="CGI-2" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? Voluptas perferendis aspernatur recusandae unde ea eum iusto nemo. Nam rem id minus. Accusantium fuga tempore iure. Porro, nemo adipisci." listItem={["HTML", "CSS", "JavaScript"]} link="https://github.com" />
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.3}}
            >
               <ArchiveCard title="CGI-3" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? Voluptas perferendis aspernatur recusandae unde ea eum iusto nemo. Nam rem id minus. Accusantium fuga tempore iure. Porro, nemo adipisci." listItem={["HTML", "CSS", "JavaScript"]} link="https://github.com" />
            </motion.div>
            </>
          )
        }
      </div>
      <div className='mt-12 flex items-center justify-center'>
       {
        showMore ?  <button onClick={()=> setShowMore(false)} className='w-28 h-12 text-sm font-titleFont border border-textColor rounded-md text-textColor tracking-wide hover:bg-hoverColor duration-300' >Show Less</button> :  <button onClick={()=> setShowMore(true)} className='w-28 h-12 text-sm font-titleFont border border-textColor rounded-md text-textColor tracking-wide hover:bg-hoverColor duration-300' >Show More</button>
       }
      </div>
    </div>
  )
}

export default Archives