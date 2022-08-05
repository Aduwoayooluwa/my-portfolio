import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import {motion} from 'framer-motion'


function MNavbar() {
    const [toggle, setToggle] = useState(false)

    const handleToggle = (e) => {
        e.preventDefault()

        setToggle(true)
    }
    return (
        <nav className='fixed font-space flex justify-around w-full p-2 text-white font-semibold'>
            <div>
                <p className='font-semibold cursor-pointer text-white text-lg'>Ayooluwa <span className='text-green-500'>Aduwo</span></p>
            </div>

            <div className='navbar w-1/2 text-lg  text-white list-none'>
                {
                    toggle ? (
                        <div className='bg-green-600 z-50 h-screen p-6 w-full '>
                            <motion.button whileTap={{scale:1.1}} onClick={() => setToggle(false)}><AiOutlineClose fontWeight='bold' fontSize={30} /></motion.button>
                <div className='text-lg text-center list-none'>
                <li className='p-2'>
                    <Link href='/home'>Home</Link>
                </li>

                <li className='p-2'>
                    <Link href='/home'>About</Link>
                </li>

                <li className='p-2'>
                    <Link href='/home'>Projects</Link>
                </li>

                <li className='p-2'>
                    <Link href='/home'>Portfolio</Link>
                </li>

                <li className='p-2'>
                    <Link href='/home'>Contact</Link>
                </li>
            </div>
                        </div>
                    ) :
                    (<div>
                        <motion.button whileTap={{scale:1.1, backgroundColor: 'green'}} onClick={handleToggle}><GiHamburgerMenu fontSize={30}/></motion.button>
            
                    </div>)
                }
            </div>
        </nav>
    )
}

export default MNavbar