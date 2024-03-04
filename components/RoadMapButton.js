import React from 'react'

function RoadMapButton({ text }) {

    return (
        <>
            <button className='flex flex-row justify-between w-full md:w-1/2 border text-gray-400 border-gray-600 p-3 rounded-md relative'>
                <span>{text}</span>
                <div className='absolute top-0 right-0 pt-1 pr-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark "><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></svg>
                </div>
            </button>
        </>
    )
}

export default RoadMapButton