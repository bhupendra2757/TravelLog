import React from 'react'

export default function Card(props) {
    console.log(props);
    return (
        <>
            <section className="flex flex-col justify-center antialiased bg-orange-50 text-gray-900 p-10">
                <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                    <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                        <a className="relative block group" href="#0">
                            <div className="absolute inset-0 bg-orange-100 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                            <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                                <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={props.img} width="540" height="303" alt="Blog post" />
                            </figure>
                        </a>
                        <div>
                            <header>
                                <div className="mb-3">
                                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                                        <li className="m-1">
                                            <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-orange-900 hover:bg-orange-500 transition duration-150 ease-in-out" href="#0">{props.tag1}</a>
                                        </li>
                                        <li className="m-1">
                                            <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-orange-500 hover:bg-orange-700 transition duration-150 ease-in-out" href="#0">{props.tag2}</a>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                                    <a className="hover:text-orange-700 transition duration-150 ease-in-out" href="#0">{props.title} </a>
                                </h3>
                            </header>
                            <p className="text-lg text-gray-400 flex-grow">{props.description}.</p>
                            <footer className="flex items-center mt-4">
                                <a href="#0">
                                    <img className="rounded-full flex-shrink-0 mr-4" src={props.img} width="40" height="40" alt="Author img" />
                                </a>
                                <div>
                                    <a className="font-medium text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out" href="#0">{props.blogger}</a>
                                    <span className="text-gray-700"> - </span>
                                    <span className="text-gray-500">{props.dateTime}</span>
                                </div>
                            </footer>
                        </div>
                    </article>
                </div>
            </section>
        </>


    )
}
