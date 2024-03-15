import React from 'react'
import RoadMapButton from './RoadMapButton';
import CreateOwnRoadMap from './CreateOwnRoadMap';


function SkillBasedElements() {

    const Skill_Based_Dummy_Data = [

        { id: 21, text: "Computer Science", role: "Skill Based Roadmaps" },
        { id: 22, text: "React", role: "Skill Based Roadmaps" },
        { id: 23, text: "Angular", role: "Skill Based Roadmaps" },
        { id: 24, text: "Vue", role: "Skill Based Roadmaps" },
        { id: 25, text: "JavaScript", role: "Skill Based Roadmaps" },
        { id: 26, text: "Node.js", role: "Skill Based Roadmaps" },
        { id: 27, text: "TypeScript", role: "Skill Based Roadmaps" },
        { id: 28, text: "Python", role: "Skill Based Roadmaps" },
        { id: 29, text: "SQL", role: "Skill Based Roadmaps" },
        { id: 30, text: "System Design", role: "Skill Based Roadmaps" },
        { id: 31, text: "Java", role: "Skill Based Roadmaps" },
        { id: 32, text: "Spring Boot", role: "Skill Based Roadmaps" },
        { id: 33, text: "Go Roadmap", role: "Skill Based Roadmaps" },
        { id: 34, text: "Rust", role: "Skill Based Roadmaps" },
        { id: 35, text: "GRaphQL", role: "Skill Based Roadmaps" },
        { id: 36, text: "Design and Architecture", role: "Skill Based Roadmaps" },
        { id: 37, text: "Design System", role: "Skill Based Roadmaps" },
        { id: 38, text: "AWS", role: "Skill Based Roadmaps" },
        { id: 39, text: "Code Review", role: "Skill Based Roadmaps" },
        { id: 40, text: "Docker", role: "Skill Based Roadmaps" },
        { id: 41, text: "Kubernetes", role: "Skill Based Roadmaps" },
        { id: 42, text: "MongoDB", role: "Skill Based Roadmaps" },
        { id: 43, text: "Prompt Engineering", role: "Skill Based Roadmaps" },

    ];

    return (
        <div className='w-full h-auto flex items-center justify-center'>
            <div className='w-full md:w-8/12  items-center justify-center flex flex-wrap m-1'>

                {Skill_Based_Dummy_Data.map(item => (
                    <div key={item.id} className='w-full md:w-1/4 m-1'>
                        <RoadMapButton text={item.text} />
                    </div>
                ))}
                <CreateOwnRoadMap />
            </div>

        </div>
    )
}

export default SkillBasedElements