import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
            <p className='font-titleFont text-lg font-semibold flex items-center tracking-wide'>
            <span className='text-base md:text-lg text-textColor mr-2'>04.</span> What's Next?
            </p>
            <h2 className='font-titleFont text-5xl font-semibold'>Get In Touch</h2>
            <p className='max-w-[600px] text-center text-textDark'>
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:example@gmail.com">
            <button  className='w-28 h-12 text-sm font-titleFont border border-textColor rounded-md text-textColor tracking-wide hover:bg-hoverColor duration-300' >Say Hello</button> 
            </a>
        </section>
    )
}

export default Contact