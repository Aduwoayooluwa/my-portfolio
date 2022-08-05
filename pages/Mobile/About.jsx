import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

function MAbout() {
  return (
    <div className='mabout h-screen bg-zinc-900 text-white font-space flex flex-col items-center'>
        <motion.div
            whileTap={{
                scale: 1.1,
                transition: {duration: 3},
                borderRadius: "25%"
            }}

            className="shadow-md w-full p-3 text-sm text-left mt-20"
            >
                <p className='text-center text-lg font-semi-bold cursor-pointer hover:text-green-500'>About Me</p>

                <div>
                    <p className='mb-3'>I am a professional Web developer with a lot of skills related to this field. I have 3 years of
                    experience as a web developer and I am versatile with frameworks and libraries like ReactJs, RemixJs,
                    NextJs, Redux.</p>
                    

                    <p className='mb-3'>
                    During the course of my learning, I have gained various accreditation and certificates from
                    various websites on the internet including the acquisition test from LinkedIn. I make sure I refine
                    my skills daily to meet up with the evolution of the internet and Technology. I have good
                    technical and reasoning abilities.
                    </p>

                    <p className='mb-3'>
                    My refined Data Structure and Algorithm skills ensure I write more efficient programs. I have
                    always been so passionate about Web Development and Design. I always see myself to be a part of this
                    innovative world of technology.
                    </p>

                    <p>
                    Thank you for taking the time to review my application letter. I will be looking forward to seeing
                    your reply and sharing more of my abilities with you. You can contact me at
                    <span className='text-green-500 hover:text-green-800'> aduwoayooluwa2017@gmail.com</span>
                    </p>
                </div>

            </motion.div>
    </div>
  )
}

export default MAbout