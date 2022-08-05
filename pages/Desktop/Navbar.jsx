import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className='fixed font-space flex justify-around w-full p-2 text-white font-semibold'>
            <div>
                <p className='font-semibold cursor-pointer text-white text-lg'>Ayooluwa <span className='text-green-500'>Aduwo</span></p>
            </div>
            
            <div className='flex justify-evenly w-1/2 text-lg  list-none'>
                <li>
                    <Link href='/home'><a>Home</a></Link>
                </li>

                <li>
                    <Link href='/#dabout'><a>About</a></Link>
                </li>

                <li>
                    <Link href='/#d_projects'><a>Projects</a></Link>
                </li>

                <li>
                    <Link href='/#d_portf'><a>Portfolio</a></Link>
                </li>

                <li>
                    <Link href='/#contact'><a>Contact</a></Link>
                </li>
            </div>

            
        </nav>
        
    )
}

export default Navbar