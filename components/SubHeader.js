"use client"
import React, { useState, useEffect } from 'react'

function SubHeader() {

    const [isSmallScreen, setIsSmallScreen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
        };

        // Initial check
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className='max-w-full flex flex-col md:mx-auto md:items-center md:justify-center'>
                <div className='ml-4 px-2 py-2 mb-8 w-2/4  md:md:w-2/4 border border-dashed border-purple-600 rounded-md'>
                    <span className='text-white'>NEW</span>
                    <span className={`ml-2 text-purple-800 ${isSmallScreen ? 'md:hidden' : 'md:block'}`}>{isSmallScreen ? 'Roadmaps for teams!' : 'Announcing roadmaps for teams. Learn more!'}</span>
                </div>
                <h1 className='text-xl ml-4 mb-4 font-bold bg-gradient-to-r from-purple-500  to-white text-transparent bg-clip-text md:text-5xl'>Developer Roadmaps</h1>
                <p className='text-gray-400 ml-4  block md:hidden'>Community created roadmaps, guides and articles to help developers grow in their career.</p>
                <p className='hidden md:block p-2 text-gray-400 ml-4 font-semibold'>roadmap.sh is a community effort to create roadmaps, guides and other educational content to help guide developers in picking up a path and guide their learnings.</p>
            </div>
        </>
    )
}

export default SubHeader