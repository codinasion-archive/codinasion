import { Grid, Typography, Container } from "@mui/material";

import ProjectCard from "@/components/ProjectCard";

export default function Projects({ projects }) {
  return (
    <>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 5, pb: 6 }}
      >
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          <b>Our Open Source Projects</b>
        </Typography>
      </Container>
      <Container maxWidth="lg" component="main">
        <Grid container spacing={3} alignItems="stretch">
          {projects.map((project) => (
            <Grid
              item
              key={project.name}
              xs={12}
              sm={6}
              md={4}
              style={{ display: "flex" }}
            >
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const projects = await fetch(`https://api.codinasion.org/projects`).then(
    (res) => res.json()
  );

  return {
    props: {
      projects,
    },
  };
}
