import CreateOwnRoadMap from "./CreateOwnRoadMap";
import RoadMapButton from "./RoadMapButton";

function BestPracticesElements() {

    const Best_Practices_Dummy_Data = [

        { id: 44, text: "Front Performance", role: "Best Practices" },
        { id: 45, text: "API Security", role: "Best Practices" },
        { id: 46, text: "Code Reviews", role: "Best Practices" },
        { id: 47, text: "AWS", role: "Best Practices" },

    ];

    return (
        <div className='w-full h-auto flex items-center justify-center'>
            <div className='w-full md:w-8/12  items-center justify-center flex flex-wrap m-1'>

                {Best_Practices_Dummy_Data.map(item => (
                    <div key={item.id} className='w-full md:w-1/4 m-1'>
                        <RoadMapButton text={item.text} />
                    </div>
                ))}

            </div>

        </div>
    )
}

export default BestPracticesElements;