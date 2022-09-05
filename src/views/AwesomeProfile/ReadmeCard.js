import {
  Card,
  CardMedia,
  CardActions,
  Avatar,
  IconButton,
  Badge,
  Tooltip,
  Grid,
} from "@mui/material";

import { red } from "@mui/material/colors";

import FavoriteIcon from "@mui/icons-material/Favorite";
import CodeIcon from "@mui/icons-material/Code";

import Link from "@/components/Link";

export default function ReadmeCard({ profile }) {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          image={profile.readme_image}
          alt="Paella dish"
        />
        <CardActions disableSpacing>
          <Link href={`https://github.com/${profile.username}`}>
            <Tooltip title={profile.username} placement="bottom">
              <IconButton aria-label="user">
                <Avatar
                  alt={profile.username}
                  src={`https://github.com/${profile.username}.png`}
                  sx={{
                    width: 32,
                    height: 32,
                  }}
                />
              </IconButton>
            </Tooltip>
          </Link>
          <Grid container justifyContent="flex-end">
            <Link href={profile.issue_url}>
              <Tooltip title="Upvote" placement="bottom">
                <IconButton aria-label="upvote">
                  <Badge
                    badgeContent={profile.upvotes}
                    max={999}
                    color="primary"
                  >
                    <FavoriteIcon
                      sx={{
                        color: red[500],
                      }}
                    />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Link>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Link href={profile.readme_url}>
              <Tooltip title="Readme Url" placement="bottom">
                <IconButton aria-label="readme url">
                  <CodeIcon />
                </IconButton>
              </Tooltip>
            </Link>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}
