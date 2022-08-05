import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'


function MPortfolio() {
    return (
    <div className='h-screen text-zinc-100 flex flex-col items-center font-space bg-zinc-900'>
        <motion.div  className='w-4/5 text-center h-fit p-6 shadow-lg flex flex-col items-center rounded-md'>
                <p className='text-xl font-bold text-green-500'>Experiences</p>
                <motion.div whileTap={{scale: 1.1, }} className='hover:shadow-md 4/5 p-6  h-fit'>
                    <p className='text-sm font-semibold'>Web Developer at Sterling Bank Plc</p>
                    <p className='text-xs '>Sterling Bank is a full service commercial bank located in Lagos, Nigeria</p>
                    <p className='text-xs italic'>04/2022 to present</p>
                </motion.div>

                <motion.div whileTap={{scale: 1.1, }} className='hover:shadow-md p-6 w-4/5 h-fit'>
                    <p className='text-sm font-semibold'>Freelancer on Fiverr</p>
                    <p className='text-xs'>I am a freelancer at fiverr. I collect gigs related to Web Design and Development.</p>
                    <p className='text-xs text-italic'>12/2019 to Present</p>
                </motion.div>
            </motion.div>

            <motion.div  className='w-4/5 text-center h-fit p-6 shadow-lg flex flex-col items-center rounded-md'>
                <p className='text-xl font-bold text-green-500'>Education</p>
                <motion.div whileTap={{scale: 1.1, }} className='hover:shadow-md 4/5 p-6 h-fit cursor-pointer'>
                    <p className='text-sm font-semibold'>Federal University of Technology, Akure.</p>
                    <p className='text-xs font-semi-bold'>Mechanical Engineering</p>
                    <p className='italic text-center text-green-600 text-xs cursor-pointer hover:text-green-700'><Link href='https://futa.edu.ng'>https://futa.edu.ng</Link></p>
                    <p className='text-xs italic'>2018 to present</p>
                </motion.div>

                <motion.div whileTap={{scale: 1.1, }} className='hover:shadow-md p-6 w-4/5 h-fit'>
                    <p className='text-sm font-semibold'>Rehoboth College</p>
                    <p>Science Department</p>
                    <p className='text-xs'>Rehoboth College is located in Okitipupa, Ondo State, Nigeria</p>
                    <p className='italic text-green-600 cursor-pointer text-xs hover:text-green-700'><Link href="https://rehobothschools.com.ng">https://rehobothschools.com.ng</Link></p>
                    <p className='text-xs italic'>12/2019 to Present</p>
                </motion.div>
            </motion.div>
          </div>
  )
}

export default MPortfolio