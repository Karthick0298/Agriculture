import React from "react";
import { makeStyles, Typography, Box, useTheme } from "@material-ui/core";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AnnouncementIcon from '@material-ui/icons/Announcement';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 1320,
    margin: "auto",
    paddingBlock: 32,
    paddingBlock: 52,
    "& .MuiTypography-h1": {
      fontSize: 42,
      color: "#00393c",
      fontFamily: "monospace",
    },
    "& .MuiTypography-h2": {
      fontSize: 22,
      color: "#00393c",
      fontFamily: "monospace",
      paddingTop: 22,
      display: "flex",
      gap: 4,
    },
  },
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function TabPanles() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      <Box className={classes.container}>
        <Typography variant="h1">
          Welcome to ICAR KRISHI VIGYAN KENDRA
        </Typography>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="ABOUT" {...a11yProps(0)} />
              <Tab label="TNBRD" {...a11yProps(1)} />
              <Tab label="HISTORY" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Typography variant="body1">
                The Indian Council of Agricultural Research (ICAR) is an
                autonomous body responsible for co-ordinating agricultural
                education and research in India
              </Typography>
              <Typography variant="h2">
                <AccountBalanceIcon />
                Department of Agriculture Research
              </Typography>
              <Typography variant="body1">
                The committee to Advise on Renovation and Rejuvenation of Higher
                Education (Yashpal Committee, 2009)
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Typography variant="body1">
                Indian Council of Agricultural Research, New Delhi sanctioned
                the KVK in Elumichangiri village of Krishnagiri district in
                1994, under the administrative control of Tamil Nadu Board of
                Rural Development (TNBRD), Chennai and functioning in the name
                of its Co-founder Dr. Perumal.
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <Typography variant="body1">
                TNBRD is a Non-Governmental Organisation, registered under the
                Societies Registration Act 1860, founded by Thiru.L.Vedapuri, a
                professional advocate. It has been functioning since 1978 and
                has engaged in various developmental activities
              </Typography>
              <Typography variant="h2">
                <AnnouncementIcon />
                Various Activity in different fields
              </Typography>
              <Typography variant="body1">
                Agriculture, Health, Education, Counseling, Women Development
                Programmes, Wasteland and Watershed development schemes.
              </Typography>
              <Typography variant="h2">
                <AnnouncementIcon />
                Veterinary Council of India (Veterinary sub-discipline)
              </Typography>
              <Typography variant="body1">
                The National Commission for Higher Education and Research –
                which would be a unified supreme body to regulate all branches
                of higher education including agricultural education.[6]
                Presently, regulation of agricultural education is the mandate
                of ICAR
              </Typography>
            </TabPanel>
          </SwipeableViews>
        </div>
      </Box>
    </>
  );
}
