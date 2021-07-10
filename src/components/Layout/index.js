import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import Slider from '../Slider'
import Marque from '../Marque'
import Sidebar from "./LeftView";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBlock: 20,
    display: 'flex',
    width: 1320,
    gap: 24,
    margin: "auto",
  },
  wrapper1: {
      display: 'flex',
      flex: 8,
      padding: 8,
      backgroundColor: '#fff',
      boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0)'
  },
  wrapper2: {
      flex: 4,
      backgroundColor: '#fff',
      boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0)',
      minWidth: 413,
      padding:8
  },
  left: {
      flex: 4.2,
      paddingRight: 5
  },
  center: {
      flex: 2.5
  } 
}));

export default function Layout() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.section}>
    <Box className={classes.container}>
        <Box className={classes.wrapper1}>
            <Box className={classes.left}>
                <Slider/>
            </Box>
            <Box className={classes.center}>
                <Marque/>
            </Box>
        </Box>
        <Box className={classes.wrapper2}>
          <Sidebar/>
        </Box>
      </Box>
    </div>
    </>
  );
}
