import React from 'react'
import SectionTitle from '../sub-components/SectionTitle'

const About = () => {
  return (
    <section id="about"
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    
    >
        <SectionTitle title="About Me" titleNo="01" />
    </section>
  )
}

export default About