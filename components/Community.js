import React from 'react'

function Community() {
    return (
        <div className='w-full h-full flex flex-col md:items-center md:justify-center  bg-white border border-red-600'>
            <h2 className='ml-1 px-2 font-bold text-xl my-2 mt-8 md:text-4xl md:mt-16'>Join the Community</h2>
            <p className='ml-1 my-2 px-2 text-sm md:text-lg md:w-[700px] md:text-center'>roadmap.sh is the <span className='text-semibold'>6th most starred project on GitHub</span> and is visited by hundreds of thousands of developers every month.</p>
            <div className='w-full flex flex-col md:flex-row md:w-7/12 md:items-center md:justify-center mb-16'>
                <div className='w-full flex flex-col mt-4 bg-gray-300 rounded-lg md:rounded-none md:bg-white md:border-r border-gray-400 '>
                    <div className='flex m-1 md:items-center md:justify-center space-x-1'>
                        <span className='bg-blue-500 ml-2 my-2 mr-1 px-1 rounded-lg'>Rank 6th</span>
                        <span className='text-blue-600 m-2'>out of 28M!</span>
                    </div>
                    <div className='flex md:flex-col md:items-center md:justify-center m-1 p-1'>
                        <span className='font-bold ml-2 md:text-4xl'>269k</span>
                        <span className='ml-1 md:text-[12px]'>GitHub Stars</span>
                    </div>
                    <div className='w-[170px] border border-black bg-white hover:bg-black hover:text-white rounded-lg m-2 p-2 md:mx-auto'>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="black"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-star">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className='font-bold text-sm ml-1'>Star us on GitHub</span>
                        </div>
                        <span className='text-[12px] ml-6 text-gray-500'>Help us reach #1</span>
                    </div>

                </div>
                <div className='w-full h-45 flex flex-col mt-4 bg-gray-300 rounded-lg md:rounded-none md:bg-white md:border-r border-gray-400'>
                    <div className='flex m-1 md:items-center md:justify-center space-x-1'>
                        <span className='bg-blue-500 ml-2 my-2 mr-1 px-1 rounded-lg'>+55K</span>
                        <span className='text-blue-600 m-2'>every month</span>
                    </div>
                    <div className='flex md:flex-col md:items-center md:justify-center m-1 p-1'>
                        <span className='font-semibold ml-2 md:text-4xl'>850k</span>
                        <span className='ml-1 md:text-[12px]'>Registered Users
                        </span>
                    </div>
                    <div className='w-[170px] border border-black bg-white hover:bg-black hover:text-white rounded-lg m-2 p-2 md:mx-auto'>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="black"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-users ">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <span className='font-semibold text-sm ml-1'>Register yourself</span>
                        </div>
                        <span className='text-[12px] ml-2 text-gray-500'>Commit to your growth</span>
                    </div>

                </div>
                <div className='w-full flex flex-col mt-4 bg-gray-300 rounded-lg md:rounded-none md:bg-white md:border-r border-gray-400'>
                    <div className='flex m-1 md:items-center md:justify-center space-x-1'>
                        <span className='bg-blue-500 ml-2 my-2 mr-1 px-1 rounded-lg '>+1.5K</span>
                        <span className='text-blue-600 m-2'>every month</span>
                    </div>
                    <div className='flex md:flex-col md:items-center md:justify-center m-1 p-1'>
                        <span className='font-bold ml-2 md:text-4xl'>18k</span>
                        <span className='ml-1 md:text-[12px]'>Discord Members</span>
                    </div>
                    <div className='w-[170px] border border-black bg-white hover:bg-black hover:text-white rounded-lg m-2 p-2 md:mx-auto'>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="black"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-boom-box text-white">
                                <path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                                <path d="M8 8v1" />
                                <path d="M12 8v1" />
                                <path d="M16 8v1" />
                                <rect width="20"
                                    height="12"
                                    x="2"
                                    y="9"
                                    rx="2" />
                                <circle cx="8"
                                    cy="15" r="2" />
                                <circle cx="16" cy="15" r="2" />
                            </svg>
                            <span className='font-bold text-sm ml-1'>Join on Discord</span>
                        </div>
                        <span className='text-[12px] ml-4 text-gray-500'>Join the community</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Community