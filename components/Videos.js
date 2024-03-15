import React from 'react'
import VideoButton from './VideoButton';

function Videos() {
    const Video_Dummy_Data = [
        { id: 1, data: "Session Based Authentication", text: "2 Minutes" },
        { id: 2, data: "Basic Authentication", text: "5 Minutes" },
        { id: 3, data: "Basic of Authentication", text: "5 Minutes" },
        { id: 4, data: "Graph Data Structure", text: "13 Minutes" },
        { id: 5, data: "Heap Data Structure", text: "11 Minutes" },
        { id: 6, data: "Tree Data Structure", text: "8 Minutes" },
        { id: 7, data: "Heap Table Data Structure", text: "8 Minutes" },
    ]
    return (
        <div className='flex flex-col bg-gray-100'>
            <div className='w-full md:mx-auto'>
                <h2 className='ml-2 font-extrabold mt-14 mb-4 text-2xl md:text-center md:text-3xl md:w-1/2 md:ml-0'>Videos</h2>
                <div className='w-full flex md:w-7/12 mx-auto'>
                    <div className='w-full mx-2'>
                        {Video_Dummy_Data.map((item => (
                            <div className='w-full flex justify-between text-gray-600 text-sm border-b border-gray-300 mb-2 pb-2'>
                                <div className='hover hover:text-blue-500' key={item.id}>{item.data}</div>
                                <span className='hidden md:block'>{item.text}</span>
                                <div className='block md:hidden'>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-chevrons-right">
                                        <path d="m6 17 5-5-5-5" />
                                        <path d="m13 17 5-5-5-5" />
                                    </svg>
                                </div>
                            </div>
                        )))}

                        <VideoButton />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Videos