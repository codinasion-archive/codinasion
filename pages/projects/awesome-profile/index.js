import React from "react";

import {
  Grid,
  Typography,
  Container,
  Box,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Button,
} from "@mui/material";

import Masonry from "@mui/lab/Masonry";

import AddIcon from "@mui/icons-material/Add";

import Link from "@/components/Link";

import ReadmeCard from "@/views/AwesomeProfile/ReadmeCard";

import Seo from "@/components/Seo";

export default function AwesomeProfile({ profiles }) {
  const [data, setData] = React.useState(profiles);
  const [search, setSearch] = React.useState("");

  const [alignment, setAlignment] = React.useState("");

  const handleSortChange = (event, newAlignment) => {
    if (newAlignment === "") {
      setData(profiles);
    }
    if (newAlignment === "latest") {
      setData(data.sort((a, b) => new Date(b.time) - new Date(a.time)));
    }
    if (newAlignment == "upvote") {
      setData([...data].sort((a, b) => b.upvotes - a.upvotes));
    }
    if (newAlignment == "username") {
      setData([...data].sort((a, b) => a.username.localeCompare(b.username)));
    }
    setAlignment(newAlignment);
  };

  const handleSearch = (e) => {
    const value = e.target.value.trim().toLowerCase();
    setSearch(value);
    if (value === "") {
      setData(profiles);
    } else {
      const filteredData = profiles.filter((profile) => {
        return profile.username.toLowerCase().includes(value);
      });
      setData(filteredData);
    }
  };

  return (
    <>
      <Seo
        title="Awesome Profile Readme"
        description="Here is the list of awesome GitHub profile READMEs submitted by the community. You can also add your profile by clicking the ADD PROFILE Button."
      />
      <Container disableGutters maxWidth="lg" component="main" sx={{ p: 3 }}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} sm={7} style={{ display: "flex" }}>
            <Typography variant="body1" color="black" paragraph>
              Here is the list of awesome GitHub profile READMEs submitted by
              the community.
              <br />
              You can also add your profile by clicking the &apos;ADD
              PROFILE&apos; Button.
            </Typography>
          </Grid>

          {/* profile search */}
          <Grid item xs={12} sm={5}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Search Username"
                variant="outlined"
                fullWidth={true}
                size="small"
                value={search}
                onChange={handleSearch}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                pt: 1,
              }}
            >
              <>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleSortChange}
                  aria-label="Sort By"
                  size="small"
                >
                  <Tooltip title="No Sort" placement="bottom">
                    <ToggleButton value="" disabled={alignment === ""}>
                      Default
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip title="Sort by Latest Added" placement="bottom">
                    <ToggleButton
                      value="latest"
                      disabled={alignment === "latest"}
                    >
                      Latest
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip title="Sort by Number of Upvotes" placement="bottom">
                    <ToggleButton
                      value="upvote"
                      disabled={alignment === "upvote"}
                    >
                      Upvote
                    </ToggleButton>
                  </Tooltip>
                  <Tooltip title="Sort by Username" placement="bottom">
                    <ToggleButton
                      value="username"
                      disabled={alignment === "username"}
                    >
                      Username
                    </ToggleButton>
                  </Tooltip>
                </ToggleButtonGroup>
                <Link href="https://github.com/codinasion/awesome-profile-readme/issues/new?assignees=&title=Add+Profile&labels=add-profile%2Cprofile-approved&template=add-profile.yml">
                  <Tooltip
                    title="Add more Readme to this list"
                    placement="bottom"
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        p: 0.8,
                        m: 1,
                      }}
                      startIcon={<AddIcon />}
                    >
                      Add Profile
                    </Button>
                  </Tooltip>
                </Link>
              </>
            </Grid>
          </Grid>
        </Grid>

        {/* profiles */}
        <Masonry
          columns={{ xs: 1, sm: 3, md: 4, lg: 4 }}
          spacing={2}
          sx={{
            my: 5,
          }}
        >
          {data.map((profile, index) => (
            <Box key={index} sx={{ boxShadow: 20 }}>
              <ReadmeCard profile={profile} />
            </Box>
          ))}
        </Masonry>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const profiles = await fetch(
    `https://api.codinasion.org/awesome-profile`
  ).then((res) => res.json());

  return {
    props: {
      profiles,
    },
    revalidate: 3600,
  };
}
