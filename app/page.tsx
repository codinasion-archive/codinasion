import Hero from "./_components/Hero";
import Contributors from "./_components/Contributors";
import Projects from "./_components/Projects";
import CTA from "./_components/CTA";

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
  const contributors = await getContributorsData();

  return (
    <div className="isolate bg-white">
      <main>
        <Hero />
        <Contributors contributors={contributors} />
        <Projects />
        <CTA />
      </main>
    </div>
  );
}
