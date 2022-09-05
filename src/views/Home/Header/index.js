import { Typography, Grid } from "@mui/material";

import siteMetadata from "@/data/siteMetadata";

import Banner from "@/public/banner.png";

function Header() {
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          py: 10,
          px: 3,
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${Banner.src})`,
        }}
      >
        <Typography component="h1" variant="h3" color="black" gutterBottom>
          <b>{siteMetadata.title.toUpperCase()}</b>
        </Typography>
        <Typography variant="h5" color="black" paragraph>
          {siteMetadata.description}
        </Typography>
      </Grid>
    </>
  );
}

export default Header;
