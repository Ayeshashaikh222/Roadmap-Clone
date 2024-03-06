"use client"
import React, { useState, useEffect } from 'react'

function HeroSection() {


    return (

        <div className='w-full h-56 flex flex-col justify-start items-center md:justify-center h-42 mt-10'>
            <div className='flex flex-col md:justify-center justify-start border border-red-600'>
                <div className='max-w-ful flex ml-4 px-2 py-2 mb-8 border border-dashed border-purple-600 rounded-md md:items-center'>
                    <span className='text-white'>NEW</span>
                    <span className='md:hidden ml-2 text-purple-800 block'> Roadmaps for teams!</span>
                    <span className='hidden ml-2 text-purple-800 md:block '>Announcing roadmaps for teams. Learn more!</span>
                </div>
                <div className='w-1/2 flex flex-col md:items-center'>
                    <h1 className='text-xl ml-4 mb-4 font-bold bg-gradient-to-r from-purple-500  to-white text-transparent bg-clip-text md:text-5xl'>Developer Roadmaps</h1>
                    <p className='text-gray-400 ml-4  block md:hidden'>Community created roadmaps, guides and articles to help developers grow in their career.</p>
                    <p className='hidden md:block p-2 text-gray-400 ml-4 font-semibold  text-center'>roadmap.sh is a community effort to create roadmaps, guides and other educational content to help guide developers in picking up a path and guide their learnings.</p>
                </div>
            </div>
        </div>


    )
}

export default HeroSection;