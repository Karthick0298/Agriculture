import React from "react";
import '../../../App.css';
import { makeStyles } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: 'hsla(0,0%,100%,0.8)',
    backdropFilter: 'saturate(140%) blur(5px)',
    width: 1320,
    margin: "auto",
    top: -1,
    zIndex: 999,
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
    position: "sticky",
    [theme.breakpoints.down('md')]: {
      width: '100%',
      margin: "auto",
    },
  },
  arrowList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiSvgIcon-root':{
      position: 'relative',
      top: 3
    }
  }
}));

export default function HeaderTwo() {
  const classes = useStyles();
  return (<>
      <section className={classes.header}>
      <div className='container'>
          <ul className='list'>
              <li><a href="home">Home</a></li>
              <li><a className={classes.arrowList} href="about"> About<span><KeyboardArrowDownIcon/></span></a>
              <div className="submenu-1">
                  <ul className='list-1'>
                  <li><a href="vision">Vision | Mission | Mandate</a></li>
                  <li><a href="district">District information</a></li>
                  <li><a href="focus">Focus and Development Trust</a></li>
                  <li><a href="our team">Our Team</a></li>
                  </ul>
              </div>
              </li>
              <li><a className={classes.arrowList} href="activity">Activities<span><KeyboardArrowDownIcon/></span></a>
              <div className="submenu-2">
                  <ul className='list-2'>
                  <li><a href="farm">On Farm Testing</a></li>
                  <li><a href="frontline">Front Line Demonstration</a></li>
                  <li><a href="building">Capacity Building Training</a></li>
                  <li><a href="sponsored">Sponsered Programmes</a></li>
                  <li><a href="extension">Extension Activities</a></li>
                  <li><a href="other">Other Programmes</a></li>
                  </ul>
              </div>
              </li>
              <li><a href="gallery">Gallery</a></li>
              <li><a href="profile">District profile</a></li>
              <li><a href="success">Success Stories</a></li>
              <li><a href="publication">Publications</a></li>
              <li><a href="recent">Recent Updates</a></li>
              <li><a className={classes.arrowList} href="morelinks">More Links<span><KeyboardArrowDownIcon/></span></a>
              <div className="submenu-3">
                  <ul className='list-3'>
                  <li><a href="newsletter">Newsletter</a></li>
                  <li><a href="linkages">Linkages</a></li>
                  <li><a href="mandates">Mandates</a></li>
                  </ul>
              </div>
              </li>
              <li><a href="scientist">Our Scientist</a></li>
              <li><a href="location">Location</a></li>
              <li><a href="contact">Contact Us</a></li>
          </ul>
      </div>
      </section>
      </>
  );
}
