import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'


function MHome() {
  return (
    <motion.div>
      
        <div className='font-Inter text-white justify-center cursor-pointer flex flex-col place-items-center'>
            <div className='font-semibold text-xl font-space mt-60 '>
                        Coding <span className='text-green-500'>Pastor</span> Welcomes you! 
            </div>

            <motion.div className='shadow-lg rounded-md  w-fit p-6 m-4 h-fit text-justify bg-black left-3 '
                    whileHover={{ scale: 1.1}}
                    >
                        <p className='font-Prompt text-lg text-green-500 font-semibold text-center'>Hello I am Ayooluwa Aduwo</p>

                        <p className='font-space text-sm'>I am a focused Web Developer who loves to 
                            create beautiful and performant products
                            with delightful user experience.</p>
                            <motion.button whileTap={{backgroundColor: "green"}} className='border border-green-500 font-space w-28 mt-3 mr-4 text-sm hover:bg-green-600 hover:border-none p-2 hover:rounded-md '>View Works</motion.button>
                            <motion.button whileTap={{backgroundColor: "darkgreen"}} className='border-green-500 border font-space text-sm w-28 p-2 hover:bg-green-600 hover:rounded-md hover:border-green-500'>Hire</motion.button>
                    </motion.div>
        </div>
        <motion.div className='absolute mt-56 flex flex-row place-items-center'>
              <a href='https://linkedin.com/in/aduwo-ayooluwa' rel ='noreferrer' target='_blank'><motion.img animate={{y:50, x:30}} whileTap={{scale:1.1, transition: {duration: 5}}} src='/linkedin.png' width='50px' height='50px' alt='' /></a>
              <a href='https://twitter.com/codingpastor' rel ='noreferrer' target='_blank'><motion.img animate={{y:50, x:30}} whileTap={{scale:1.1, transition: {duration: 4}}} src='/twitter.png' width='50px' height='50px' alt='' /></a>
              <a href='https://github.com/AduwoAyooluwa' rel ='noreferrer' target='_blank'><motion.img animate={{y:50, x:30}} whileTap={{scale:1.1, transition: {duration: 3}}} src='/github.jpg' width='50px' height='50px' alt='' /></a>

        </motion.div>
    </motion.div>
  )
}

export default MHome