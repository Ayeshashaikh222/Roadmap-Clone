import React from 'react'
import RoadMapButton from './RoadMapButton';
import CreateOwnRoadMap from './CreateOwnRoadMap';

function QuestionsElements() {

    const Questions_Dummy_Data = [

        { id: 47, text: "JavaScript", role: "Questions" },
        { id: 48, text: "Node.js", role: "Questions" },
        { id: 49, text: "React", role: "Questions" },

    ];

    return (
        <div className='w-full h-auto flex items-center justify-center'>
            <div className='w-full md:w-8/12 items-center justify-center flex flex-wrap m-1'>

                {Questions_Dummy_Data.map(item => (
                    <div key={item.id} className='w-full h-18 md:h-24 md:w-1/4 m-1'>
                        <RoadMapButton text={item.text} />
                    </div>
                ))}

            </div>

        </div>
    )
}

export default QuestionsElements;