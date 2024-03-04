import DividerSegment from "@/components/DividerSegment";
import MainHeader from "@/components/MainHeader";
import RoadMapButton from "@/components/RoadMapButton";
import RoadMapElement from "@/components/RoadMapElement";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";



export default function Home() {
  const userRole = [
    "Role based Roadmaps", "Skill Based Roadmaps", "Best Practices", "Questions"
  ];


  return (
    <div className="border border-yello-900">
      <MainHeader />
      <SubHeader />
      <DividerSegment />
      <RoadMapElement role={userRole} />

    </div>
  );
}
