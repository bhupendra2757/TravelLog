import logo from "./assets/logo.svg"
import image from "./assets/banner.jpg"
//#24301
import React from 'react'

function Customer({ name, description, image }) {
    return (
        <div>
            <div className="flex justify-center items-center" ><img src={image} className="h-[190px] w-[190px] bg-gray-600 rounded-full"></img></div>
            <h5 className="text-center" >{name}</h5>
            <p className="text-center px-8" >{description}</p>
        </div>
    )
}

const customerquote = "This is a quite text I don't know what to write here right now"

export default function App() {
    return (
        <>
            <div className="bg-[url('../src/assets/banner.jpg')] pb-8 bg-cover">
                <nav className="flex flex-row justify-between container p-3">
                    <div>
                        <img src={logo} height="50px" width="50px" className="bg-contain" />
                    </div>
                    <ul className="flex flex-row gap-8 text-white text-lg">
                        <li>Home</li>
                        <li>Inspiration</li>
                        <li><button className="hover:border-b-2" >
                            Login</button></li>
                    </ul>
                </nav>

                <div className="container flex flex-col justify-between gap-y-10 text-center text-white">
                    <div className="text-4xl pt-10 ">
                        Discover the World around you
                    </div>

                    <div className="text-xl ">
                        Visit places, collect memories and share with others.
                    </div>

                    <div>
                        <a href="#" className="text-3xl hover:border-b-2"> Started Now</a>
                    </div>

                </div>
            </div >
            <div className="flex flex-row justify-around items-center pt-4">
                <div className="text-2xl">
                    Go where your heart takes you.
                </div>
                <div>
                    <div className="bg-green-400 h-[150px] w-[300px]">
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-around items-center pt-4">
                <div>
                    <div className="bg-green-400 h-[150px] w-[300px] ">
                    </div>
                </div>
                <div className="text-2xl">
                    Bring back your memories with you.
                </div>
            </div>

            <div className="mt-4">
                <h4 className="text-center text-3xl">Customers</h4>
                <div className="flex flex-row gap-8 justify-evenly ">
                    <Customer name="John Doe" description={customerquote} image={image} />
                    <Customer name="John Doe" description={customerquote} image={image} />
                    <Customer name="John Doe" description={customerquote} image={image} />
                    <Customer name="John Doe" description={customerquote} image={image} />

                </div>
            </div>

            <footer>
                <div className="mt-5 h-14 bg-green-400 flex justify-center items-center">
                    <img src={logo} height="50px" width="50px" className="bg-contain" />
                </div>
            </footer>


        </>
    )
}





