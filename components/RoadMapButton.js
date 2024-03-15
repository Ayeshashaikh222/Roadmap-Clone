import React from 'react'

function RoadMapButton({ text }) {

    return (

        <button className='flex flex-row justify-between w-full md:w-full md:mx-auto border text-gray-600 border-gray-800 py-3 px-3 rounded-md relative hover:border hover:border-gray-600'>
            <span className='text-gray-400 text-md'>{text}</span>
            <div className='absolute top-0 right-0 pt-1 pr-1'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bookmark text-gray-600 ">
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </svg>
            </div>
        </button>

    )
}

export default RoadMapButton