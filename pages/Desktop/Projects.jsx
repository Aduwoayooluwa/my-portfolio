import React from 'react'
import Image from 'next/image'

function Projects() {
    return (
        <div id="d_projects" className='h-screen text-white bg-yellow-500 flex flex-row justify-center items-center font-space'>
            <div className="absolute h-fit p-6 bg-zinc-800 text-white text-center w-3/4 flex overflow-x-scroll m-4">
                <div className="p-3 rounded-md w-full bg-slate-900 mr-5">
                    <p className="text-center text-lg font-semibold">HealthBanc</p>
                    <Image src='/health.png' width='250px' height='250px' alt='' />
                    <p className='text-sm text-justify'>I integrated a Wallet section into the Healthbanc project from Sterling bank. The 
                    technologies involved are Redux, React.js, Javascript, Axios (to fetch REST APIs)</p>
                    <div className="flex m-3">
                        <button className="bg-green-500 font-semibold font-space p-2 w-40 h-12 text-sm rounded-md mr-3">View Project</button>
                        <button className="bg-green-500 font-semibold w-40 h-12  p-2 rounded-md">View Code</button>
                    </div>
                </div>

                <div className="p-3 rounded-md w-full bg-slate-900 mr-5">
                    <p className="text-center text-lg font-semibold">Wordle Game</p>
                    <Image src='/puzzle.png' width='300px' height='250px' alt='' />
                    <p className='text-justify text-sm'>A Wordle Game created with React.js and native CSS. I wrote the algorithm involved to build the wordle game from scratch.
                    I also implemented every design that came from the original Wordle game.</p>
                    <div className="flex m-3">
                        <button className="bg-green-500 font-semibold font-space p-2 w-40 h-12 rounded-md mr-3">View Project</button>
                        <button className="bg-green-500 font-semibold w-40 h-12  p-2 rounded-md">View Code</button>
                    </div>
                </div>

                <div className="p-3 rounded-md w-full bg-slate-900 mr-5">
                    <p className="text-center text-lg font-semibold">Jumia Clone</p>
                    <Image src='/jumia.jpg' width='300px' height='250px' alt='' />
                    <p className='text-sm text-justify'>Jumia is an online store where goods are purchased. I cloned the frontend part of the online store. The technologies I used were: React.js, redux, Native CSS</p>
                    <div className="flex m-3">
                        <button className="bg-green-500 font-semibold w-40 h-12 font-space p-2 rounded-md mr-3">View Project</button>
                        <button className="bg-green-500 font-semibold w-40 h-12 p-2 rounded-md">View Code</button>
                    </div>
                </div>

                <div className="p-3 rounded-md w-full bg-slate-900 mr-5">
                    <p className="text-center text-lg font-semibold">Amazon Clone</p>
                    <Image src='/amazon.jpg' width='300px' height='250px' alt='' />
                    <p className='text-sm text-justify'>Amazon is popular online store that sells items. I cloned the frontend part of the Amazon store. The technologies used were: NextJs, tailwind css, redux, axios. I fetched APi from fakeStoreAPI</p>
                    <div className="flex m-3">
                        <button className="bg-green-500 font-semibold font-space p-2 w-40 h-12 rounded-md mr-3">View Project</button>
                        <button className="bg-green-500 font-semibold w-40 h-12  p-2 rounded-md">View Code</button>
                    </div>
                </div>

                <div className="p-3 rounded-md w-full bg-slate-900 mr-5">
                    <p className="text-center text-lg font-semibold">Music Player</p>
                    <Image src='/music.jpg' width='300px' height='250px' alt='' />
                    <p className='text-sm text-justify'>A web music player created using React.js, Native CSS.</p>
                    <div className="flex m-3">
                        <button className="bg-green-500 font-semibold font-space w-40 h-12 p-2 rounded-md mr-3">View Project</button>
                        <button className="bg-green-500 font-semibold w-40 h-12 p-2 rounded-md">View Code</button>
                    </div>
                </div>

                <div className="p-3 rounded-md w-full bg-slate-900 mr-5">
                    <p className="text-center text-lg font-semibold">Spelling Bee Quiz</p>
                    <Image src='/spell.jpg' width='300px' height='250px' alt='' />
                    <p className='text-sm text-justify'>A mini online spelling bee quiz web app. That allows participants to take spelling bee quiz online and scores them. It was built by me for a church</p>
                    <div className="flex m-3">
                        <button className="bg-green-500 font-semibold font-space w-40 h-12 p-2 rounded-md mr-3">View Project</button>
                        <button className="bg-green-500 font-semibold w-40 h-12 p-2 rounded-md">View Code</button>
                    </div>
                </div>

                <div className="p-3 rounded-md w-full bg-slate-900 mr-5">
                    <p className="text-center text-lg font-semibold">Hashnode Clone</p>
                    <Image src='/blog.jpg' width='300px' height='250px' alt='' />
                    <p className='text-sm text-justify'>Hashnode is a web platform that allows developers to write about their field. It allows them to build and share their Technical experience and expertise. I cloned the Landing Page</p>
                    <div className="flex m-3">
                        <button className="bg-green-500 font-semibold font-space w-40 h-12 p-2 rounded-md mr-3">View Project</button>
                        <button className="bg-green-500 font-semibold w-40 h-12 p-2 rounded-md">View Code</button>
                    </div>
                </div>

                <div className="p-3 rounded-md w-full bg-slate-900 mr-5">
                    <p className="text-center text-lg font-semibold">Jokes App</p>
                    <Image src='/jokes.jpg' width='300px' height='250px' alt='' />
                    <p className='text-sm text-justify'>I built an app that selects random jokes for bored individuals that would want to lighten up their day.</p>
                    <div className="flex m-3">
                        <button className="bg-green-500 font-semibold font-space w-40 h-12 p-2 rounded-md mr-3">View Project</button>
                        <button className="bg-green-500 font-semibold w-40 h-12 p-2 rounded-md">View Code</button>
                    </div>
                </div>

                <div className="p-3 rounded-md w-full bg-slate-900 mr-5">
                    <p className="text-center text-lg font-semibold">My Portfolio Website</p>
                    <Image src='/bg-101.jpg' width='300px' height='250px' alt='' />
                    <p className='text-sm text-justify'>This mini beautiful Web Design you are on, is designed by me, to showcase my works. It is one of my many projects I have completed</p>
                    <div className="flex m-3">
                        <button className="bg-green-500 font-semibold font-space w-40 h-12 p-2 rounded-md mr-3">View Project</button>
                        <button className="bg-green-500 font-semibold w-40 h-12 p-2 rounded-md">View Code</button>
                    </div>
                </div>

                <div className="p-3 rounded-md w-full bg-slate-900 mr-5">
                    <p className="text-center text-lg font-semibold">Gen-Z Metaverse Landing Page</p>
                    <Image src='/metaverse.jpg' width='300px' height='250px' alt='' />
                    <p className='text-sm text-justify'>I built a Gen-Z landing page. It is a page that depicts the future of web design. It is a landing page for the future of Metaverse, with gradient design as the background.</p>
                    <div className="flex m-3">
                        <button className="bg-green-500 font-semibold font-space w-40 h-12 p-2 rounded-md mr-3">View Project</button>
                        <button className="bg-green-500 font-semibold w-40 h-12 p-2 rounded-md">View Code</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects