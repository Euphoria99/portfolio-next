import React from 'react'
import ArchiveCard from '../sub-components/ArchiveCard'

const Archives = () => {
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
        <p className='text-sm font-titleFont text-textColor'>View the archives</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 md:grid-cols xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
        <ArchiveCard title="QrPix" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, pariatur? Voluptas perferendis aspernatur recusandae unde ea eum iusto nemo. Nam rem id minus. Accusantium fuga tempore iure. Porro, nemo adipisci." listItem={["HTML", "CSS", "JavaScript"]} link="https://github.com" />
      </div>
    </div>
  )
}

export default Archives