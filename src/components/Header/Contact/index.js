import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import ContactsIcon from "@material-ui/icons/Contacts";
import FontSizeChanger from "react-font-size-changer";
import '../../../App.css'

const useStyles = makeStyles((theme) => ({
  contact: {
    display: "flex",
    alignItems: "center",
    "& .MuiTypography-body1": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      color: "white",
      fontSize: 13,
      cursor: "pointer",
      fontFamily:
        'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      "&:hover": {
        color: "red",
        transition: "all 500ms ease 0s",
      },
    },
  },
  background: {
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    display: "flex",
    width: 1320,
    margin: "auto",
  },
  icon: {
    color: "white",
    marginRight: 4,
  },
  font: {
      display: 'flex',
      alignItems: 'center'
  }
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className='example'>
      <div className={classes.background}>
      <div className={classes.container}>
        <Box p={1} className={classes.contact} id="target" flexGrow={1}>
          <Typography className="content">
            <ContactsIcon className={classes.icon} fontSize="small" />
            Contact Us
          </Typography>
        </Box>
        <Box className={classes.font}>
          <FontSizeChanger
            targets={["#target .content"]}
            onChange={(element, newValue, oldValue) => {
              console.log(element, newValue, oldValue);
            }}
            options={{
              stepSize: 2,
              range: 3,
            }}
            customButtons={{
              up: <span style={{ fontSize: "12px", position: 'relative', top: '-3px' }}>A+</span>,
              down: <span style={{ fontSize: "12px", position: 'relative', top: '-3px' }}>A-</span>,
              style: {
                backgroundColor: "#f8f9fa",
                color: "#000",
                WebkitBoxSizing: "border-box",
                WebkitBorderRadius: "100px",
                border: '1px solid #f8f9fa',
                cursor: 'pointer',
                width: '32px',
                height: '32px'
              },
              buttonsMargin: 10,
            }}
          />
        </Box>
      </div>
    </div>
    </div>
    
  );
}
