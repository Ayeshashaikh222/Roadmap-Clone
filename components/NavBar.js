import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (

        <div className="w-full flex items-center justify-center px-6 py-6 md:px-0 border border-green-600">
            <nav className="w-1/2">
                <div className='w-full flex items-center text-gray-500 border border-green-700'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-codesandbox text-gray-400">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="7.5 4.21 12 6.81 16.5 4.21" /><polyline points="7.5 19.79 7.5 14.6 3 12" />
                        <polyline points="21 12 16.5 14.6 16.5 19.79" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" x2="12" y1="22.08" y2="12" />
                    </svg>
                    <div className='w-full ml-2 flex flex-row gap-16'>
                        <div className="w-42 h-10 md:flex space-x-3 border items-center border-red-600">
                            <div className='hidden md:block'>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-menu text-gray-400">
                                    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" />
                                    <line x1="4" x2="20" y1="18" y2="18" />
                                </svg>
                            </div>
                            <div className='hidden md:block'>
                                <Link href="/" className="text-gray-400 hover hover:text-red hover:text-white">Start Here</Link>
                            </div>
                            <div className='hidden md:block'>
                                <Link href="/" className="text-gray-400 hover hover:text-red hover:text-white">Teams</Link>
                            </div>
                            <div className="hidden md:block relative ml-3 border border-red-600 text-sm ">
                                <Link href="/" className=" ml-3 md:m-3  text-blue-400 hover:text-white">We're Hiring</Link>
                                <div className='absolute top-[-2px] right-0'>
                                    <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                                </div>
                            </div>
                            <div><button className="w-25 h-8 hidden py-1 px-2 md:flex md:m-4 items-center border border-gray-700 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-search text-gray-400">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                                <span className='ml-1 text-gray-400 hover:text-white'>Search</span>
                            </button></div>
                        </div>
                        <div className="hidden md:ml-14 md:flex md:px-4 md:items-center border border-red-600 ">
                            <div><Link href="/" className="text-gray-400 hover:text-white">Login</Link></div>
                            <div><button className="bg-blue-600  ml-2 text-sm  px-6 py-1 rounded-3xl text-white bg-gradient-to-r from-blue-500  to-blue-800">Sign Up</button></div>
                        </div>
                        <div className='block md:hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-menu text-gray-400">
                                <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default NavBar;