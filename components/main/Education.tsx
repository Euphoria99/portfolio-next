'use client'
import SectionTitle from '../sub-components/SectionTitle'
import { educationList } from "../../datasource"
import { motion } from 'framer-motion';


const Education = () => {

  return (
    <section
      id="education"
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 sm:pl-2 sm:pr-2'
    >
      <SectionTitle title="Education" titleNo="" />
      <div className='w-full mt-4 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-24 flex flex-col'>
          {/* empty */}
        </ul>
        <div className='w-full mt-8 gap-16'>
          {educationList.map((item, index) => (
            <motion.div
              key={index} // Add a unique key prop here
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className='w-full mb-10'
            >
              <h3 className='flex gap-1 font-medium text-xl font-titleFont'>
                {item.institutionLink ? (
                  <a
                    href={item.institutionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='tracking-wide'
                  >
                    {item.instutionName}
                  </a>
                ) : (
                  <span className='tracking-wide'>{item.instutionName}</span>
                )}
              </h3>
              <h3 className='flex gap-1 font-medium text-xl font-titleFont text-textColor'>{item.course}</h3>
              <p className='font-titleFont text-md flex items-center tracking-wide'>
                {item.placeOfStudy}
              </p>
              <p className='font-titleFont text-md flex items-center tracking-wide'>
                {item.durationOfStudy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;



