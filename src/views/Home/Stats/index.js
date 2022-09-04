import { Typography, Box, Grid } from "@mui/material";

export default function Stats({ stats }) {
  return (
    <>
      <Grid container item xs={10} sx={{ mx: "auto", py: 5 }}>
        {stats &&
          stats.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Box sx={{ my: 3 }}>
                <Typography variant="bold" component="h2" align="center">
                  {item.value}
                </Typography>
                <Typography variant="bold" component="h3" align="center">
                  {item.title.toUpperCase()}
                </Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </>
  );
}
