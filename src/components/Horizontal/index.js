import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Marquee from "react-fast-marquee";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 1320,
    margin: "auto",
    paddingBlock: 32,
    "& .MuiTypography-h1": {
      fontSize: 42,
      color: "#00393c",
      fontFamily: "monospace",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));

export default function Horizontal() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h1">Government Of India</Typography>
      <Marquee pauseOnHover={true} speed={70}>
        <img src='./images/gazette.png' alt='pic'/>
        <img src='./images/gold.png' alt='pic' width={100}/>
        <img src='./images/pib.png' alt='pic'/>
        <img src='./images/portal.png' alt='pic'/>
        <img src='./images/gazette.png' alt='pic'/>
        <img src='./images/gold.png' alt='pic' width={100}/>
        <img src='./images/pib.png' alt='pic'/>
        <img src='./images/portal.png' alt='pic'/>
      </Marquee>
    </div>
  );
}
