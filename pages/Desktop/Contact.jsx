import React, {useRef} from 'react'


function Contact() {

    return (
        <div >
            <form id='contact' className='h-screen bg-green-900 flex flex-col items-center' action='https://fabform.io/f/8xokkru' method='post'>

            
            <section className='w-3/5 mt-28'>
                <p className='font-space text-white font-semibold text-lg text-center mb-8'>Contact Me</p>
            <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Full Name'
                    className="w-full bg-gray-100 rounded mb-3 border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email Address'
                    className="w-full bg-gray-100 rounded mb-3 border border-gray-300 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-green-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>

                <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                    Submit
                </button>
            </section>
            </form>
        </div>
    )
}

export default Contact