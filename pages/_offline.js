import Head from "next/head";

import {
  Grid,
  Typography,
  Container,
  Divider,
} from "@mui/material";

export default function Fallback() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title key="title">Offline | Codinasion</title>
        <meta
          key="description"
          name="description"
          content="Looks like, either you are offline or the page you are looking for is not available."
        />
      </Head>
      <Container
        maxWidth="lg"
        sx={{
          p: 5,
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid item align="center" xs={12}>
            <Typography variant="h2" gutterBottom>
              <b>404</b>
            </Typography>
            <Typography variant="h5" gutterBottom>
              Content Not Found
            </Typography>
            <Divider
              sx={{
                my: 5,
              }}
            />
            <Typography variant="subtitle2" gutterBottom>
              Looks like, either you are offline or the page you are looking for
              is not available.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
