import React from 'react'
import { bioData } from "../../datasource"

const EmailPannel = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-10 text-textLight'>
       <a href={`mailto:${bioData.email}`}>
            <p className='text-sm rotate-90 w-72 tracking-wide text-textColor'>{bioData.email}</p>
        </a>
              {/* white line*/}
      <div className="w-[2px] ">
      </div>
      {/* <div className="w-[2px] h-32 bg-textDark">
      </div> */}
     </div>
  )
}

export default EmailPannel