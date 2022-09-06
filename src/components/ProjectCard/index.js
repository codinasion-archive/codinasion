import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import StarIcon from "@mui/icons-material/StarBorder";

import Link from "@/components/Link";

function ProjectCard({ project }) {
  return (
    <>
      <Card
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          minWidth: "100%",
        }}
        className="projectCard"
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              mb: 2,
            }}
          >
            <Typography component="h2" variant="h3" color="text.primary">
              {project.stars}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              <StarIcon />
            </Typography>
          </Box>

          <Typography component="h4" variant="h6" align="center">
            {project.name}
          </Typography>
          <br />
          <Typography component="h4" variant="subtitle1" align="center">
            {project.description}
          </Typography>
        </CardContent>
        {project.demo !== "" && (
          <Link href={project.demo}>
            <CardActions>
              <Button fullWidth variant="outlined">
                DEMO
              </Button>
            </CardActions>
          </Link>
        )}
        <Link href={project.url}>
          <CardActions>
            <Button fullWidth variant="outlined">
              CONTRIBUTE
            </Button>
          </CardActions>
        </Link>
      </Card>
    </>
  );
}

export default ProjectCard;
