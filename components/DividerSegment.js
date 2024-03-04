import React from 'react'

function DividerSegment() {
    const Dummy_data = [
        {
            id: 1,
            text: 'Role Based Roadmaps'
        },
        {
            id: 2,
            text: 'Skill Based Roadmaps'
        },
        {
            id: 3,
            text: 'Best Practices'
        },
        {
            id: 4,
            text: 'Questions'
        }
    ]
    return (
        <>
            <div className='flex justify-center border-b border-gray-500 relative mt-10'>
                <button className='absolute top-[-11px] right-50 w-1/4 border border-gray-500 text-gray-400 rounded-md bg-transparent'>Role based roadmaps</button>
            </div >
        </>
    )
}

export default DividerSegment