import React from 'react'
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";


interface Props {
  title: string,
  desc: string,
  listItem: string[],
  link: string
}

const ArchiveCard = ({ title, desc, listItem, link }: Props) => {
  return (

    <a href={link} target='_blank'>
      <div>
        <div className='w-full h-80 rounded-lg bg-cardColor p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group'>
          <div className='flex justify-between items-center'>
            <FaRegFolder className='text-4xl hover:text-textColor' />
            <RxOpenInNewWindow className='text-4xl hover:text-textColor' />
          </div>
          <div>
            <h2 className='text-xl font-titleFont font-semibold tracking-wide group-hover:text-textColor'>{title}</h2>
            <p className='text-sm mt-3'>{desc}</p>
          </div>
          <ul className='text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap'>
            {
              listItem.map((item, i) => (
                <li key={i}>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </a>
  )
}

export default ArchiveCard
