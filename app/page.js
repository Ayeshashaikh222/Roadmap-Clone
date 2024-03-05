import DividerSegment from "@/components/DividerSegment";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import RoadMapElement from "@/components/RoadMapElement";





export default function Home() {
  const userRole = [
    "Role based Roadmaps", "Skill Based Roadmaps", "Best Practices", "Questions"
  ];


  return (
    <div className="border border-yello-900">
      <NavBar />
      <HeroSection />
      <DividerSegment />
      <RoadMapElement role={userRole} />

    </div>
  );
}
