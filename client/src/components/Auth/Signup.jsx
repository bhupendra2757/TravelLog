import React from 'react'
import Logo from '../../assets/yaad_logo.svg'
import Glogo from '../../assets/Google_Logo.png'
import Flogo from '../../assets/fb_logo.png'
import Traveller from '../../assets/Traveller1.png'

export default function Signup() {
    return (
        <div className="2xl:container h-screen m-auto">
            <div hidden role="hidden" className="fixed inset-0 w-7/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"></div>
            <div className=" h-full mr-auto lg:w-6/12">
                <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                    <div className="space-y-4 flex justify-center ">
                        <img src={Logo} className="pr-10" alt="logo" width='100px' height='100px' />
                        <p className="font-medium text-lg text-center text-gray-600">Welcome to Yaad, your memory creation! <br /> Register First</p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2">
                        <button className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                            <div className="flex gap-4 justify-center">
                                <img src={Glogo} className="w-5" alt="" />
                                <span className="block w-max font-medium tracking-wide text-sm text-blue-700">with  Google</span>
                            </div>
                        </button>
                        <button className="py-3 px-6 rounded-xl bg-blue-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                            <div className="flex gap-4 items-center justify-center text-white">
                                <img src={Flogo} className="w-5" alt="" />
                                <span className="block w-max font-medium tracking-wide text-sm text-white">with Facebook</span>
                            </div>
                        </button>
                    </div>

                    <div role="hidden" className="mt-12 border-t">
                        <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">Or</span>
                    </div>

                    <form action="" className="space-y-6 py-6">
                        <div className='flex flex-col  '>
                            <input
                                type="name"
                                placeholder="Your Full Name, Please"
                                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                            />
                        </div>


                        <div className="flex flex-col items-end">
                            <input
                                type="password"
                                placeholder="Enter Your Password, Keep Sercret ;) "
                                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                            />
                        </div>
                        <div className="flex flex-col items-end">
                            <input
                                type="password"
                                placeholder="Enter Your Password, Keep Sercret ;) "
                                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                            />

                        </div>

                        <div>
                            <button className="w-full px-6 py-3 mb-5 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                                <span className="font-semibold text-white text-lg">Sign Up</span>
                            </button>
                            <p className=" text-sm tracking-wide  mt-5 text-center text-gray-700">
                                 Already Have an account, Click here to {" "}
                                <a href="/login" className="font-medium text-blue-600 hover:underline"> Login </a>
                            </p>
                        </div>
                    </form>

                </div>
            </div>
            <div hidden className="fixed ml-auto inset-0 w-6/12 lg:block">
                <img src={Traveller} className="w-full h-full object-cover" alt="" />
            </div>
        </div>
    )
}

