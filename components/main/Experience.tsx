'use client'
import React, { useState } from 'react'
import SectionTitle from '../sub-components/SectionTitle'
import { experienceList } from "../../datasource"
import ExperienceItem from '../sub-components/ExperienceItem';

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);


  return (
    <section
      id="experience"
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 sm:pl-2 sm:pr-2'
    >
      <SectionTitle title="Experience" titleNo="" />
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          {experienceList.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedCompany(index)}
              className={`${
                selectedCompany === index
                  ? "border-l-textColor text-textColor"
                  : "border-l-hoverColor text-textDark"
              } border-l-2  bg-transparent hover:bg-cardColor py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              {item.company}
            </li>
          ))}
        </ul>
        {selectedCompany !== null && (
          <ExperienceItem {...experienceList[selectedCompany]} />
        )}
      </div>
    </section>
  );
};

export default Experience;