'use client'
import Image from 'next/image'
//
import Navbar from '@/components/sub-components/Navbar';
import IconPannel from '@/components/sub-components/IconPannel';
import EmailPannel from '@/components/sub-components/EmailPannel';
import { motion } from 'framer-motion';
import Banner from '@/components/sub-components/Banner';
import About from './About';


export default function Home() {
  return (
      <div className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
            <IconPannel />
          </motion.div>
          <div className='h-[88vh] w-full mx-auto p-4'>
            {/*  */}
            <Banner />
            {/* About */}
            <About />
            {/*Experience  */}
            {/*  Projects*/}
            {/*  Archive*/}
            {/*  Contact*/}
            {/*  Footer*/}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
            <EmailPannel />
          </motion.div>
        </div>
      </div>
  )
}
