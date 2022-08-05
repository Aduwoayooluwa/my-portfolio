import React from 'react'
import {motion } from 'framer-motion'


function Home() {

    return (
        <motion.div className=''>
        <div className='font-Inter text-white justify-center cursor-pointer flex flex-col m-40 place-items-center'>
                    <div className='font-semibold text-3xl font-space mt-20 '>
                        Coding <span className='text-green-500'>Pastor</span> Welcomes you! 
                    </div>
                    <motion.div className='shadow-lg rounded-md  w-2/6 m-6 p-6 h-fit text-justify bg-black left-3 '
                    whileHover={{ scale: 1.1}}
                    >
                        <p className='font-Prompt text-xl text-green-500 font-semibold text-center'>Hello I am Ayooluwa Aduwo</p>

                        <p className='font-space'>I am a focused Web Developer who loves to 
                            create beautiful and performant products
                            with delightful user experience.</p>
                            <motion.button className='border border-green-500 font-space w-40 mt-3 mr-4 hover:bg-green-600 hover:border-none p-2 hover:rounded-md '>View Works</motion.button>
                            <motion.button className='border-green-500 border font-space w-40 p-2 hover:bg-green-600 hover:rounded-md hover:border-green-500'>Hire</motion.button>
                    </motion.div>

                    <motion.div className='absolute mt-96 flex flex-row place-items-center'>
                        <a href='https://linkedin.com/in/aduwo-ayooluwa' className='mr-4' rel='noreferrer' target='_blank'><motion.img animate={{y:50, x:30}} whileHover={{scale:1.2}} src='/linkedin.png' width='50px' height='50px' alt='' /></a>
                        <a href='https://twitter.com/codingpastor' className='mr-4' rel='noreferrer' target='_blank'><motion.img animate={{y:50, x:30}} whileHover={{scale:1.2}} src='/twitter.png' width='50px' height='50px' alt='' /></a>
                        <a href='https://github.com/AduwoAyooluwa' className='mr-4' rel='noreferrer' target='_blank'><motion.img animate={{y:50, x:30}} whileHover={{scale:1.2}} src='/github.jpg' width='50px' height='50px' alt='' /></a>

                    </motion.div>
                    
                </div>
        </motion.div>
    )
}

export default Home