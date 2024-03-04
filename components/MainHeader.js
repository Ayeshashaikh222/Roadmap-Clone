import Link from 'next/link'
import React from 'react'

function MainHeader() {
    return (
        <>
            <div className="container max-w-full mx-auto px-6 py-12 md:px-0  border border-green-600">
                <nav className="w-full flex items-center md:justify-center text-gray-500 border border-green-700 md:mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-codesandbox">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="7.5 4.21 12 6.81 16.5 4.21" /><polyline points="7.5 19.79 7.5 14.6 3 12" />
                        <polyline points="21 12 16.5 14.6 16.5 19.79" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" x2="12" y1="22.08" y2="12" />
                    </svg>
                    <div className="hidden h-10 md:flex space-x-6 border m-2 items-center border-red-600">
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-menu">
                                <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        </div>
                        <div>
                            <Link href="/" className="text-gray-500 hover hover:text-red hover:text-white">Start Here</Link>
                        </div>
                        <div>
                            <Link href="/" className="text-gray-500 hover hover:text-red hover:text-white">Teams</Link>
                        </div>
                    </div>
                    <div className=" m-3 border border-red-600">
                        <Link href="/" className=" ml-3 text-blue-400 hover:text-white">We're Hiring</Link>
                    </div>
                    <button className="hidden  md:flex md:m-4 items-center border border-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-search text-gray-500">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                        <span className='text-gray-500 hover:text-white'>Search</span>
                    </button>

                    <div className="hidden md:ml-10 md:flex md:px-4 md:m-3 md:items-center  border border-red-600 ">
                        <Link href="/" className="hover:text-white">Login</Link>
                        <button className="bg-blue-600  ml-2 text-sm px-6 py-3 rounded-3xl hover:text-white">Sign Up</button>
                    </div>
                    <div className='block md:hidden justify-end'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-menu">
                            <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default MainHeader