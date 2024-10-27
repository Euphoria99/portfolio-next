import React from 'react'
import Image from "next/image";
import { nextLogo } from '@/public/assets';
import { bioData } from "../../datasource"

const Contact = () => {
    return (
        <section id="contact" className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
        <p className='font-titleFont text-lg font-semibold flex items-center tracking-wide'>
        <span className='text-base md:text-lg text-textColor mr-2'></span> What&apos;s Next?
        </p>
        <h2 className='font-titleFont text-5xl font-semibold'>Get In Touch</h2>
        <p className='max-w-[600px] text-center text-textDark'>
        I&apos;m excited to explore internship opportunities that will enhance my learning journey, and I&apos;m also open to graduate roles.<br/> I would truly love to connect! Whether you have a question, some advice to share, or just want to say hello, please feel free to reach out.
        </p>
        <a href={`mailto:${bioData.email}`}>
        <button  className='w-28 h-12 text-sm font-titleFont border border-textColor rounded-md text-textColor tracking-wide hover:bg-hoverColor duration-300' >Say Hello</button> 
        </a>
            <div className="mt-12 ml-12"> 
                <p className='font-titleFont text-lg flex items-center tracking-wide'>
                    Made with
                </p>
                <Image
                    className='rounded-lg h-full object-cover mt-4'
                    src={nextLogo}
                    alt='profile Image'
                    style={{
                        maxWidth: '70%',
                        maxHeight: '70%',
                        width: 'auto',
                        height: 'auto',
                    }}
                />
            </div>
        </section>
    );
};

export default Contact;
