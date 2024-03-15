import React from 'react'

function CreateOwnRoadMap() {
    return (
        <div className='w-full mt-1 mr-1 flex flex-col border border-dashed border-gray-800 ml-1 md:w-1/4 py-3 px-4 rounded'>
            <div className='flex items-center justify-center text-gray-400 mx-1'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus">
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                </svg>
                <button className='text-sm ml-1'>Create your own Roadmap</button>
            </div>
        </div>
    )
}

export default CreateOwnRoadMap