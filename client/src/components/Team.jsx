import React from 'react'
import sampleImage from '../assets/sample_person.jpeg'

function Team() {
    return (
        <div className="py-20 bg-orange-50">
            <div className="container mx-auto px-6 text-center md:px-12">
                <div className="mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-dark md:text-4xl">
                        Meet Our Professionals
                    </h2>
                    <p className="text-gray-600 dark:text-gray-700 lg:mx-auto lg:w-8/12">
                    Thank you for all the hard work and dedication you put in every day. Your efforts are greatly appreciated and make a real difference. Let's continue working together to achieve our goals and make a positive impact.
                    </p>
                </div>
                <div className="grid gap-28 py-20 md:grid-cols-3 md:gap-12">
                    <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
                        <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                            <img className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]" src={sampleImage} alt="man" loading="lazy" width={640} height={805} />
                        </div>
                        <div className="space-y-4 text-center">
                            <div>
                                <h4 className="text-2xl text-gray-700 dark:text-gray-700">John Doe</h4>
                                <span className="block text-sm text-gray-500">CEO-Founder</span>
                            </div>
                            <a href="#" className="mx-auto block w-max text-orange-500  hover:bg-orange-500  font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded transition duration-500">View Bio</a>                        </div>
                    </div>
                    <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
                        <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                        <img className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]" src={sampleImage} alt="man" loading="lazy" width={640} height={805} />
                        </div>
                        <div className="space-y-4 text-center">
                            <div>
                                <h4 className="text-2xl text-gray-700 dark:text-gray-700">Jhon Doe</h4>
                                <span className="block text-sm text-gray-500">Chief Operations Officer</span>
                            </div>
                            <a href="#" className="mx-auto block w-max text-orange-500  hover:bg-orange-500  font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded transition duration-500">View Bio</a>                        </div>
                    </div>
                    <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
                        <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                        <img className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]" src={sampleImage} alt="man" loading="lazy" width={640} height={805} />
                          </div>
                        <div className="space-y-4 text-center">
                            <div>
                                <h4 className="text-2xl text-gray-700 dark:text-gray-700">John Doe</h4>
                                <span className="block text-sm text-gray-500">Chief Business Officer</span>
                            </div>
                            <a href="#" className="mx-auto block w-max text-orange-500  hover:bg-orange-500  font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded transition duration-500">View Bio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Team