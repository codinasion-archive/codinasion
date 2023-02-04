import About from "./_components/about";
import Intro from "./_components/Intro";
import BackgroundII from "./_components/LayoutsComp/backgroundII";
import AboutCards from "./_components/AboutComp/AboutCards";
import RepoContainerI from "./_components/ReposComp/ReposContainerI";
import TestimonialContainer from "./_components/TestimonialComp/TestimonialContainer";
import BackgroundIII from "./_components/LayoutsComp/backgroundIII";
import Background from "./_components/LayoutsComp/background";
import Devs from "app/_components/DevsComp/Devs";

export default async function HomePage() {
  return (
    <>
      <Background />
      <div className="relative z-10">
        <Intro />
      </div>
      <div className="relative z-10">
        <BackgroundII />
        <div className="relative z-10">
          <AboutCards />
          <About />
          <RepoContainerI />
          <BackgroundIII>
            <Devs forward={true} header={true} />
            <TestimonialContainer/>
          </BackgroundIII>
        </div>
      </div>
    </>
  );
}
