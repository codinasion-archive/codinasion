import { Button, Grid, Typography, Container } from "@mui/material";

import Link from "@/components/Link";

import ProjectCard from "@/components/ProjectCard";

export default function ProjectComponent({ projects }) {
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
      <Container maxWidth="md" component="main">
        <Grid container spacing={3} alignItems="stretch">
          {projects.slice(0, 3).map((project) => (
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

        {projects.length > 3 && (
          <>
            <Grid
              sx={{
                my: 1,
              }}
              container
              spacing={3}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={4} style={{ display: "flex" }}>
                <Link href="/projects">
                  <Button fullWidth variant="outlined">
                    See All Projects
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
}
