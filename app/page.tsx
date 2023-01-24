import About from "./_components/about";
import Intro from "./_components/Intro";
import BackgroundII from "./_components/LayoutsComp/backgroundII";
import AboutCards from "./_components/AboutComp/AboutCards";
import RepoContainerI from "./_components/ReposComp/ReposContainerI";
import DevsContainerI from "./_components/DevsComp/DevsContainerI";
import TestimonialContainer from "./_components/TestimonialComp/TestimonialContainer";
import BackgroundIII from "./_components/LayoutsComp/backgroundIII";

async function getContributorsData() {
  const res = await fetch(
    `https://api.github.com/repos/codinasion/program/contributors?per_page=100&page=1`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HomePage() {
  // const contributors = await getContributorsData();

  return (
    <>
      <Intro />
      <div className="relative">
        <BackgroundII />
        <div className="relative z-10">
          <AboutCards />
          <About />
          <RepoContainerI />
          <BackgroundIII>
            <DevsContainerI />
            <TestimonialContainer />
          </BackgroundIII>
        </div>
      </div>
    </>
  );
}
