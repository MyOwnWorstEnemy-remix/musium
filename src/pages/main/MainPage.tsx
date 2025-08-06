import Hero from "./components/Hero";
import SectionWithList from "../../components/SectionWithList";

function MainPage() {
  return (
    <div className="w-full">
      <Hero />
      <SectionWithList title="New Release Songs" listType="horizontal" gap="24px" /> 
      <SectionWithList title="Top Albums" listType="horizontal" gap="24px" /> 
      <SectionWithList title="Trending Songs" listType="vertical" gap="15px" /> 
    </div>
  );
}

export default MainPage;