import React from 'react'

function Footer() {
    return (
        <div className='mt-14 mb-12'>
            <div className='flex m-2 flex-col md:flex-row md:items-center md:justify-center mb-10 text-gray-400 font-semibold'>
                <div className='mx-2 mt-2 pb-1 border-b border-gray-500 md:border-none'>Roadmaps</div>
                <div className='mx-2 mt-2 pb-1 border-b border-gray-500 md:border-none'>Best Practices</div>
                <div className='mx-2 mt-2 pb-1 border-b border-gray-500 md:border-none'>Guides</div>
                <div className='mx-2 mt-2 pb-1 border-b border-gray-500 md:border-none'>Videos</div>
                <div className='mx-2 mt-2 pb-1 border-b border-gray-500 md:border-none'>FAQs</div>
                <div className='mx-2 mt-2 pb-1 '>YouTube</div>
            </div>
            <div className='w-full flex flex-col md:mx-auto md:w-7/12 md:flex-row '>
                <div className='w-9/12 m-4 md:w-[400px] mr-7 '>
                    <div className='flex space-x-2 mb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-codesandbox text-white">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="7.5 4.21 12 6.81 16.5 4.21" /><polyline points="7.5 19.79 7.5 14.6 3 12" />
                            <polyline points="21 12 16.5 14.6 16.5 19.79" />
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                            <line x1="12" x2="12" y1="22.08" y2="12" />
                        </svg>
                        <span className='text-white font-semibold text-md md:text-lg'>roadmap.sh</span>
                        <span className='text-gray-400'>by</span>
                        <span className='bg-blue-500 text-sm text-white rounded p-1 md:hidden'>Kamran Ahmed</span>
                        <span className='hidden bg-blue-500 text-sm text-white rounded p-1 md:block'>@Kamrif</span>
                    </div>
                    <p className='text-gray-400'>Community created roadmaps, articles, resources and journeys to help you choose your path and grow in your career.</p>
                    <div className='mt-4'>
                        <div className='flex text-gray-500'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-copyright mt-1">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
                            </svg>
                            <span className='ml-1 text-[13px] mr-3'>roadmap.sh</span>
                            <li className='text-[13px] mr-3'>Terms</li>
                            <li className='text-[13px] mr-3'>Privacy</li>
                            <li></li>
                            <div className='flex space-x-2' >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="23"
                                    height="23"
                                    viewBox="0 0 24 24"
                                    fill="gray"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-mail text-black">
                                    <rect width="20"
                                        height="16" x="2"
                                        y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="23"
                                    height="23"
                                    viewBox="0 0 24 24"
                                    fill="gray"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-youtube text-black">
                                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                                    <path d="m10 15 5-3-5-3z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="23"
                                    height="23"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-x">
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-9/12 m-4 md:ml-10 md:w-[380px]'>
                    <h2 className='flex text-blue-400 font-bold text-xl bg-gradient-to-r from-blue-500 to-pink-700 text-transparent bg-clip-text md:text-3xl mb-3 md:justify-end md:mr-4 '>THENEWSTACK</h2>
                    <p className='text-gray-400'>The leading DevOps resource for Kubernetes, cloud-native computing, and the latest in at-scale development, deployment, and management.</p>
                    <div className='mt-4'>
                        <div className='flex text-gray-500 md:ml-12'>
                            <span className='ml-1 text-[13px] mr-3'>DevOps</span>
                            <li className='text-[13px] mr-3'>Kubernetes</li>
                            <li className='text-[13px] mr-3'>Cloud-Native</li>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer