import {
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  backgroundColor: {
    background: "#00393c",
    paddingBlock: 70,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  container: {
    width: 1148,
    margin: "auto",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column",
    },
  },
  logo: {
    flex: 0.35,
    display: "flex",
    gap: 8,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: 20,
    },
  },
  root: {
    "&.MuiTypography-body1": {
      color: "#b7b7b7",
      fontSize: 14,
      paddingTop: 16,
    },
  },
  footer_navigation: {
    flex: 0.4,
    paddingLeft: 38,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  navTxt: {
    "&.MuiTypography-h2": {
      color: "#fff",
      fontWeight: 800,
      fontFamily: 'monospace',
      textTransform: "uppercase",
      fontSize: "1.428rem",
      paddingLeft: 20,
    },
  },
  navLinks: {
    display: "flex",
    gap: 32,
    paddingTop: 15,
  },
  divider: {
    "&.MuiDivider-root": {
      width: 68,
      height: 3,
      border: "none",
      height: 3,
      margin: "4px 24px",
      flexShrink: 0,
      backgroundColor: "#ffbc13",
    },
  },
  nav: {
    "&.MuiList-root": {
      color: "#b7b7b7",
    },
    "& .MuiTypography-body1": {
      fontSize: 14,
    },
    "& .MuiListItemIcon-root": {
      minWidth: 26,
      color: "#4f4f4f",
    },
  },
  footer_address: {
    flex: 0.45,
    paddingLeft: 38,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  navLinks2: {
    display: "flex",
    gap: 6,
    paddingTop: 32,
    paddingLeft:20,
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: "16px 24px",
    },
  },
  address: {
    display: "flex",
    "& .MuiTypography-body1": {
      fontSize: 14,
      color: "#b7b7b7",
    },
  },
  number: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    paddingLeft: 20,
  },
  mail: {
    display: "flex",
    paddingLeft: 25,
    flexDirection:'column'
  },
  addressNo: {
    display: "flex",
    paddingLeft: 8,
  },
  SocialMediaIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 36,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "flex-start",
      paddingLeft: 20,
    },
    '& .MuiListItem-button':{
        borderRadius: 5
    },
    "& .MuiList-root": {
      display: "flex",
      gap: 32,
      [theme.breakpoints.down("sm")]: {
        gap: 12,
      },
    },
    "& .MuiListItem-gutters": {
      padding: 0,
      border: "1px solid #0f2644",
    },
    "& .MuiSvgIcon-root": {
      width: "0.8em",
      color: "#fff",
    },
    "& .MuiListItemIcon-root": {
      minWidth: 36,
      padding: "4px 8px",
    },
  },
  fColor: {
    background: "#116466",
    padding: 20,
  },
  fContainer: {
    width: 1148,
    margin: "auto",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  brand: {
    flex: 1,
    "& .MuiTypography-body1": {
      color: "#b7b7b7",
      fontSize: 14,
    },
  },
  copyright: {
    "& .MuiTypography-body1": {
      color: "#b7b7b7",
      fontSize: 14,
    },
  },
  powered: {
    color: "#b7b7b7",
    cursor: "pointer",
    fontSize: 14,
    "&:hover": {
      color: "#fff",
    },
  },
  divide: {
    display: "flex",
    flexDirection: "column",
    gap: 28,
  },
  leftLogo: {
    display: "flex",
    alignItems: "center",
    "& .MuiTypography-h1": {
      fontSize: 44,
      fontWeight: 600,
      fontFamily: "monospace",
      color: "#fff",
      paddingLeft: 20,
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.backgroundColor}>
        <div className={classes.container}>
          <div className={classes.logo}>
            <div className={classes.divide}>
              <div className={classes.leftLogo}>
                <img
                  alt="star logo"
                  src="/images/TNBRD-logo.png"
                  width={80}
                  height={75}
                />
                <Typography variant="h1">ICAR</Typography>
              </div>
              <div className={classes.rightMedia}>
                <div className={classes.SocialMediaIcon}>
                  <List>
                    <ListItem button style={{backgroundColor:'#0077b5'}}>
                      <ListItemIcon>
                        <TwitterIcon />
                      </ListItemIcon>
                    </ListItem>
                    <ListItem button style={{backgroundColor:'#4267B2'}}>
                      <ListItemIcon >
                        <FacebookIcon />
                      </ListItemIcon>
                    </ListItem>
                    <ListItem button style={{backgroundColor:'#25D366'}}>
                      <ListItemIcon>
                        <WhatsAppIcon />
                      </ListItemIcon>
                    </ListItem>
                    <ListItem button style={{backgroundColor:'#FF0000'}}>
                      <ListItemIcon>
                        <YouTubeIcon/>
                      </ListItemIcon>
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.footer_navigation}>
            <Typography variant="h2" className={classes.navTxt}>
              other links
            </Typography>
            <Divider className={classes.divider} />
            <div className={classes.navLinks}>
              <div>
                <List
                  component="nav"
                  aria-label="main mailbox folders"
                  className={classes.nav}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <KeyboardArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <KeyboardArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Publication" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <KeyboardArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact Us" />
                  </ListItem>
                </List>
              </div>
              <div>
                <List
                  component="nav"
                  aria-label="main mailbox folders"
                  className={classes.nav}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <KeyboardArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="About Us" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <KeyboardArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Gallery" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <KeyboardArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Location" />
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
          <div className={classes.footer_address}>
            <Typography variant="h2" className={classes.navTxt}>
              Contact Info
            </Typography>
            <Divider className={classes.divider} />
            <div className={classes.navLinks2}>
              <div className={classes.address}>
                <Typography>Address:</Typography>
                <div className={classes.addressNo}>
                  <Typography>
                    ICAR - Krishi Vigyan Kendra Elumichangiri village
                    Mallinayanapalli Post Krishnagiri district - 635 120
                  </Typography>
                </div>
              </div>
              <div className={classes.address}>
                <Typography>phone:</Typography>
                <div className={classes.number}>
                  <Typography>+91 9443888644</Typography>
                  <Typography>+91 8098280123</Typography>
                </div>
              </div>
              <div className={classes.address}>
                <Typography>E-mail:</Typography>
                <div className={classes.mail}>
                  <Typography>kvk.Krishnagiri@icar.gov.in</Typography>
                  <Typography>drperumalkvk@gmail.com</Typography>
                </div>
              </div>
              <div className={classes.address}>
                <Typography>Website:</Typography>
                <div className={classes.addressNo}>
                  <Typography>www.krishnagirikvk.org</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.fColor}>
        <div className={classes.fContainer}>
          <div className={classes.brand}>
            <Typography>© Copyright 2021. ICAR-KRISHI. All Rights Reserved.</Typography>
          </div>
          <div className={classes.copyright}>
            <Typography>
              Powered by <span className={classes.powered}>Karthick M</span>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
