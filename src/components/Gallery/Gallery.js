import React from "react";
import { makeStyles, Typography, Box, Grid, Paper } from "@material-ui/core";
import YoutubeEmbed from "./Youtube";
import "./card.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 40,
    justifyContent: "center",
    "& .MuiTypography-h1": {
      fontSize: 42,
      color: "#00393c",
      fontFamily: "monospace",
    },
  },
  wrapper: {
    display: "flex",
    gap: 42
  },
  content1: {
    flex: 4,
  },
  content2: {
    flex: 8,
    display:'flex',
    flexWrap: 'wrap',
    gap: 40
  },
}));

export default function Gallery() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Typography variant="h1">Gallery</Typography>
      </Box>
      <div className={classes.wrapper}>
        <div className={classes.content1}>
          <YoutubeEmbed embedId="z6vvh8rcuIE" />
        </div>
        <div className={classes.content2}>
          <div class="style_prevu_kit">
          <img src="./images/G1.jpg" width={220} height={152} />
          </div>
          <div class="style_prevu_kit">
          <img src="./images/G2.jpg" width={220} height={152} />
          </div>
          <div class="style_prevu_kit">
          <img src="./images/G3.jpg" width={220} height={152} />
          </div>
          <div class="style_prevu_kit">
          <img src="./images/G4.jpg" width={220} height={152} />
          </div>
          <div class="style_prevu_kit">
          <img src="./images/G5.jpg" width={220} height={152} />
          </div>
          <div class="style_prevu_kit">
          <img src="./images/G6.jpg" width={220} height={152} />
          </div>
        </div>
      </div>
    </>
  );
}
