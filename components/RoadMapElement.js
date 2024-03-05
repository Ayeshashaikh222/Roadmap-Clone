import React from 'react'
import RoadMapButton from './RoadMapButton';

function RoadMapElement({ role }) {
    const Dummy_Data = [

        { id: 1, text: "Frontend", role: "Role based Roadmaps" },
        { id: 2, text: "Backend", role: "Role based Roadmaps" },
        { id: 3, text: "DevOps", role: "Role based Roadmaps" },
        { id: 4, text: "Full Stack", role: "Role based Roadmaps" },
        { id: 5, text: "Android", role: "Role based Roadmaps" },
        { id: 6, text: "PostgreSQL", role: "Role based Roadmaps" },
        { id: 7, text: "AI and Data Scientist", role: "Role based Roadmaps" },
        { id: 8, text: "Blockchain", role: "Role based Roadmaps" },
        { id: 9, text: "QA", role: "Role based Roadmaps" },
        { id: 10, text: "Software Architect", role: "Role based Roadmaps" },
        { id: 11, text: "ASP.NET Core", role: "Role based Roadmaps" },
        { id: 12, text: "c++", role: "Role based Roadmaps" },
        { id: 13, text: "Flutter", role: "Role based Roadmaps" },
        { id: 14, text: "Cyber Security", role: "Role based Roadmaps" },
        { id: 15, text: "UX Design", role: "Role based Roadmaps" },
        { id: 16, text: "React Native", role: "Role based Roadmaps" },
        { id: 17, text: "Game Developer", role: "Role based Roadmaps" },
        { id: 18, text: "Technical Write", role: "Role based Roadmaps" },
        { id: 19, text: "Data Structure & Algorithms", role: "Role based Roadmaps" },
        { id: 20, text: "MLOps", role: "Role based Roadmaps" },
        { id: 14, text: "Computer Science", role: "Skill Based Roadmaps" },
        { id: 15, text: "React", role: "Skill Based Roadmaps" },
        { id: 16, text: "Angular", role: "Skill Based Roadmaps" },
        { id: 17, text: "Software Architect", role: "Skill Based Roadmaps" },
        { id: 18, text: "Software Architect", role: "Skill Based Roadmaps" },
        { id: 19, text: "Software Architect", role: "Skill Based Roadmaps" },
    ];

    return (
        <>
            <div className='w-full flex flex-col md:flex-row md:items-center md:justify-center md:flex-col-3 list-none border border-yellow-500'>
                {/* md:mx-auto grid mt-8 md:grid-cols-3 */}

                {Dummy_Data.map(item => (
                    <li key={item.id} className='w-full border border-green-500 m-1'>
                        <RoadMapButton text={item.text} />
                    </li>
                ))}
            </div>


        </>
    )
}

export default RoadMapElement;