import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { motion } from "framer-motion";

function Intro() {
    const [route, setRoute] = useState(false)

    return (
        <div className='bg-intro-pattern font-Prompt text-white h-screen grid place-items-center'>
            
            

            <div className='text-3xl text-center font-semibold'>
                <Typewriter

                    onInit={(typewriter) => {
                        typewriter.typeString("<div className='text-2xl'>Welcome | To | Ayooluwa | Aduwo | Portfolio | Website</div>")
                        .callFunction(() => {
                            console.log('String typed out!');
                        })
                        .pauseFor(3000)
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                        
                    }}
                    options={{
                        loop: true,
                        autoStart: true
                    }}
                    />
            </div>
            
            <div>
                <motion.button className='p-4 rounded-md bg-green-600 shadow-md text-white font-bold '
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                >
                <Link href='/home'>Start Tour</Link>
                </motion.button>
            </div>

            <div className='absolute  bottom-5 grid'>
                <audio autoPlay controls>
                    <source src='/tech-sound-1.wav' type='audio/wav' />
                </audio>
            </div>

        </div>
    )
}

export default Intro