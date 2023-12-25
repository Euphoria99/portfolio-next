import React, { useState } from 'react'
import SectionTitle from '../sub-components/SectionTitle'
import GB1 from '../sub-components/work/GB1'
import GB2 from '../sub-components/work/GB2'

const Experience = () => {

  const [workGB1, setWorkGB1] = useState(true)
  const [workGB12, setWorkGB12] = useState(false)

  const handleGB1 = () => {
    setWorkGB1(true)
    setWorkGB12(false)
  }

  const handleGB12 = () => {
    setWorkGB1(false)
    setWorkGB12(true)
  }
  
  return (
    <section 
    id="experience"
    className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'
    >
              <SectionTitle title="Experience" titleNo="02" />
              <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
                    <ul className='md:w-32 flex flex-col'>
                        <li 
                        onClick={handleGB1} 
                        className={
                          `${workGB1 
                          ? "border-l-textColor text-textColor" 
                          : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                            GB1
                        </li>
                        <li 
                        onClick={handleGB12} 
                        className={
                          `${workGB12 
                          ? "border-l-textColor text-textColor" 
                          : "border-l-hoverColor text-textDark"} border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                            GB12
                        </li>
                    </ul>
                    { workGB1 && <GB1 />}
                    { workGB12 && <GB2 />}
                    
              </div>
    </section>
  )
}

export default Experience