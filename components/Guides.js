import React from 'react'
import GuidesButton from './GuidesButton';

function Guides() {
    const Guides_Dummy_Data = [
        { id: 1, data: "8 In-Demand Backend Developer Skills to Master", text: "Textual" },
        { id: 2, data: "The 5 Best Development Languages to Master (2024)", text: "Textual" },
        { id: 3, data: "5 Free Resources to Master LLMs", text: "Textual" },
        { id: 4, data: "Introduction to LLMs", text: "Textual" },
        { id: 5, data: "Jump Servers: What, Why and How", text: "Textual" },
        { id: 6, data: "Guide to Let's Encrypt SSL Setup", text: "Textual" },
        { id: 7, data: "Single Command Database Setup", text: "Textual" },
    ]
    return (
        <div className='flex flex-col bg-gray-100'>
            <div className='w-full md:mx-auto'>
                <h2 className='ml-2 font-extrabold mt-12 mb-4 text-2xl md:text-center md:text-3xl md:w-1/2 md:ml-0'>Guides</h2>
                <div className='w-full flex md:w-7/12 mx-auto'>
                    <div className='w-full mx-2'>
                        {Guides_Dummy_Data.map((item => (
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

                        <GuidesButton />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Guides;