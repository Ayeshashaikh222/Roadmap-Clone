import BestPracticesElements from "@/components/BestPracticesElements";
import Community from "@/components/Community";
import BestPracticesDivider from "@/components/Divider/BestPracticesDivider";
import DividerSegment from "@/components/Divider/DividerSegment";
import Questions from "@/components/Divider/Questions";
import SkillBasedDividerSegment from "@/components/Divider/SkillBasedDividerSegment";
import Footer from "@/components/Footer";
import Guides from "@/components/Guides";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import QuestionsElements from "@/components/QuestionsElements";
import RoadMapElement from "@/components/RoadMapElement";
import SkillBasedElements from "@/components/SkillBasedElements";
import Videos from "@/components/Videos";


export default function Home() {
  const userRole = [
    "Role based Roadmaps", "Skill Based Roadmaps", "Best Practices", "Questions"
  ];


  return (
    <div >
      <NavBar />
      <HeroSection />
      <DividerSegment />
      <RoadMapElement role={userRole} />
      <SkillBasedDividerSegment />
      <SkillBasedElements />
      <BestPracticesDivider />
      <BestPracticesElements />
      <Questions />
      <QuestionsElements />
      <Guides />
      <Videos />
      <Community />
      <Footer />

    </div>
  );
}
