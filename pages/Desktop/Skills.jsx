import Image from 'next/image'
import React from 'react'
import {motion } from 'framer-motion'

function Skills() {
            return (
                    <div className='h-full p-12 w-full flex flex-col items-center'>
                        <div className=' w-4/5 flex flex-col items-center'>
                            <p className='font-space font-semibold text-zinc-100 text-center mb-10 text-xl'>My Skills</p>
                        <motion.div className='grid grid-cols-4 gap-4 w-3/5 place-content-center'
                        whileHover={{scale:1.0}}
                        >
                    
                        <motion.img whileHover={{scale:1.1}} src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'
                        alt=''
                        width='140px'
                        height='30px'
                        className='mr-3'
                        />

                        <motion.img whileHover={{scale:1.1}} src='https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54'
                        alt=''
                        width='120px'
                        height='30px' className='mr-3'
                        />

                    <motion.img whileHover={{scale:1.1}} src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'
                        alt=''
                        width='120px'
                        height='30px' className='mr-3'
                        />

            <motion.img whileHover={{scale:1.1}} src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'
                        alt=''
                        width='100px'
                        height='30px' className='mr-3'
                        />

            <motion.img whileHover={{scale:1.1}} src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white'
                        alt=''
                        width='100px'
                        height='30px' className='mr-3'
                        />

            <motion.img whileHover={{scale:1.1}} src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white'
                        alt=''
                        width='100px'
                        height='30px' className='mr-3'
                        />

            <motion.img whileHover={{scale:1.1}} src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
                        alt=''
                        width='100px'
                        height='30px' className='mr-3'
                        />

                        <motion.img whileHover={{scale:1.1}} src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white'
                        alt=''
                        width='100px'
                        height='30px' className='mr-3'
                        />

                        <motion.img whileHover={{scale:1.1}} src='https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black'
                        alt=''
                        width='140px'
                        height='20px' className='mr-3'
                        />

                        <motion.img whileHover={{scale:1.1}} src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'
                        width='140px'
                        height='30px' className='mr-3'
                        alt=''
                        />

                        <motion.img whileHover={{scale:1.1}} src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white'
                        width='140px'
                        alt=''
                        height='30px' className='mr-3'
                        />

                        <motion.img whileHover={{scale:1.1}} src='https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white'
                        width='80px'
                        height='30px'
                        alt=''
                        />
                    </motion.div>
                    </div>
                    </div>
                )
            }

            export default Skills