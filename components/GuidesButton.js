import React from 'react'

function GuidesButton() {
    return (
        <div className='w-full md:w-[128px] mt-4 '>
            <button className='flex w-full pl-2  py-2 items-center justify-center  text-[14px] md:text-[12px] md:text-white  md:bg-gradient-to-r from-gray-700  to-gray-900  rounded md:rounded-2xl border border-black'>View All Guides
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-move-right ml-2 md:ml-1">
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                </svg>
            </button>


        </div>
    )
}

export default GuidesButton;