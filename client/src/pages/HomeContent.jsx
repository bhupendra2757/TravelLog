// import logo from "../assets/logo.svg"
import image from "../assets/banner.jpg"
import React from 'react'
import Team from "../components/Team"
import Blog from "../components/Blog/Blog"

export default function HomeContent() {
    return (
        <>
            <div className="bg-[url('../src/assets/banner.jpg')] pb-8 bg-cover h-[100vh]">
                <div className="container flex flex-col justify-between gap-y-10 text-center text-white py-[10em]">
                    <div className="xl:container  ">
                        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-center xl:text-7xl dark:text-white">Discover the World around you <br className="lg:block hidden" /> <span className=" text-transparent sm:text-5xl md:text-6xl lg:w-auto lg:text-center xl:text-8xl bg-clip-text bg-gradient-to-r from-pink-400 to-orange-600">Visit places, collect memories and share with others.</span>.</h1>
                    </div>

                    <div className='py-20'>
                        <a href="/blog" className="mx-auto block w-max text-white sm:text-xl md:text-3xl lg:text-center xl:text-4xl hover:bg-gradient-to-r from-pink-400 to-orange-600 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded transition duration-700"> Started Now</a>
                    </div>
                </div>
            </div >
            <Blog/>
            </>
    )
}


