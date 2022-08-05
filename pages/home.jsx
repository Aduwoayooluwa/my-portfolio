import React from 'react'
import Image from 'next/image'
import Navbar from './Desktop/Navbar'
import Home from './Desktop/Home'
import Projects from './Desktop/Projects'
import Portfolio from './Desktop/Portfolio'
import About from './Desktop/About'
import Contact from './Desktop/Contact'
import Footer from './Desktop/Footer'
import Skills from './Desktop/Skills'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import MHome from './Mobile/Home'
import MAbout from './Mobile/About'
import MNavbar from './Mobile/Navbar'
import MPortfolio from './Mobile/Portfolio'
import MProjects from './Mobile/Projects'

function OHome() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
        <motion.div 
        className='absolute bg-fixed bg-center bg-no-repeat bg-cover bg-home-pattern'>
            {isDesktopOrLaptop && (<>
            <div>
            <Navbar />
            </div>
            <div>
                <div className="h-screen">
                <Home />
                </div>

                <About />
                <Projects />
                <Portfolio />
                <Skills />
                <Contact />
                <Footer />

            </div>
            </>)}

            {isBigScreen && (<>
            <div>
            <Navbar />
            </div>
            <div>
                <div className="h-screen">
                <Home />
                </div>

                <About />
                <Projects />
                <Portfolio />
                <Skills />
                <Contact />
                <Footer />

            </div>
            </>)}

            {isTabletOrMobile && (<>
            <div>
            <MNavbar />
            </div>
            <div>
                <div className="h-screen">
                <MHome />
                </div>

                <MAbout />
                <MProjects />
                <MPortfolio />
                <Skills />
                <Contact />
                <Footer />

            </div>
            </>)}
        
        </motion.div>

    )
}

export default OHome