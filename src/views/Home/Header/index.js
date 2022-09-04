import { Typography, Grid } from "@mui/material";

import siteMetadata from "@/data/siteMetadata";

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
        }}
        style={{
          backgroundColor: "grey",
        }}
      >
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          <b>{siteMetadata.title.toUpperCase()}</b>
        </Typography>
        <Typography variant="h5" color="inherit" paragraph>
          {siteMetadata.description}
        </Typography>
      </Grid>
    </>
  );
}

export default Header;
