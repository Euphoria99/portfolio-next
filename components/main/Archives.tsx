'use client'
import React, { useState } from 'react'
import ArchiveCard from '../sub-components/ArchiveCard';
import { motion } from 'framer-motion';
import { otherProjects} from "../../datasource";

const Archives = () => {
  const [showMore, setShowMore] = useState(false);

  // number of initially visible cards
  const initialCards = 3;
  
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
        <p className='text-sm font-titleFont text-textColor'>View the archives</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 md:grid-cols xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
        {otherProjects.slice(0, initialCards).map((item, index) => (
          <ArchiveCard key={index} {...item} />
        ))}

        {showMore &&
          otherProjects.slice(initialCards).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <ArchiveCard {...item} />
            </motion.div>
          ))}
      </div>
      <div className='mt-12 flex items-center justify-center'>
        <button
          onClick={() => setShowMore(!showMore)}
          className='w-28 h-12 text-sm font-titleFont border border-textColor rounded-md text-textColor tracking-wide hover:bg-hoverColor duration-300'
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default Archives;
