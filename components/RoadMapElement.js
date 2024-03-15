import React from 'react'
import RoadMapButton from './RoadMapButton';
import CreateOwnRoadMap from './CreateOwnRoadMap';

function RoadMapElement({ role }) {

    const Role_Based_Dummy_Data = [

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
    ];

    return (

        <div className='w-full h-auto flex items-center justify-center'>
            <div className='w-full md:w-8/12  items-center justify-center flex flex-wrap m-1'>

                {Role_Based_Dummy_Data.map(item => (
                    <div key={item.id} className='w-full md:w-1/4 m-1'>
                        <RoadMapButton text={item.text} />
                    </div>
                ))}
                <CreateOwnRoadMap />
            </div>

        </div>
    )
}

export default RoadMapElement;