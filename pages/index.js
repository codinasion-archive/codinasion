import fetch from "node-fetch";

import Header from "@/views/Home/Header";
import Stats from "@/views/Home/Stats";
import Projects from "@/views/Home/Projects";

export default function Home({ stats, projects }) {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Stats */}
      <Stats stats={stats} />

      {/* Projects */}
      <Projects projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  const stats = await fetch(`https://api.codinasion.org/stats`).then((res) =>
    res.json()
  );

  const projects = await fetch(`https://api.codinasion.org/projects`).then(
    (res) => res.json()
  );

  return {
    props: {
      stats,
      projects,
    },
    revalidate: 3600,
  };
}
