import React from "react";
import { makeStyles, Box, Typography, IconButton } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%'
    },
    content:{
        '& .MuiTypography-body1':{
            lineHeight: '30px',
            paddingBottom: 38,
            borderBottom: '2.5px dotted #e1e1e1',
        }
    },
    icons:{ 
        display: 'flex',
        alignItems:'center',
        justifyContent: 'space-evenly',
        marginBlock: 12,
        border: '1px solid #e1e1e1',

    },
    fb: {
        color: '#4267B2'
    },
    twitter: {
        color: '#00acee'
    },
    yt: {
        color: '#c4302b'
    },
    container1: {
        display: 'flex',
        '& .MuiTypography-h6':{
            background: theme.palette.primary.main,
            color: '#fff',
            fontWeight: 600,
            padding: 6,
            fontSize: '1.05rem'
        },
        '& .MuiTypography-h5':{
            fontSize: 14,
            color: '#000',
            fontWeight: 700,
            backgroundColor: '#eeeeee',
            flex: 1
        }
    },
    animation:{
        '& .MuiTypography-body1': {
            borderBottom: '2.5px dotted #e1e1e1',
            cursor: 'pointer',
            padding: 8,
            paddingBlock: 16,
            lineHeight: '32px'
        } 
    }
}));

export default function Sidebar() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.container}>
        <img src='./images/G9.jpg' style={{width: '100%'}}/>
        <Box className={classes.content}>
            <Typography>
            Krishi Vigyan Kendra is a farm science centre under Indian Council of Agricultural Research (ICAR), Ministry of Agriculture & Farmers' Welfare, Government of India, which provides trainings for rural population.
            </Typography>
        </Box>
        <Box className={classes.icons}>
            <IconButton className={classes.fb}>
                <FacebookIcon/>
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton className={classes.twitter}>
                <TwitterIcon/>
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton className={classes.yt}> 
                <YouTubeIcon/>
            </IconButton>
        </Box>
        <Box className={classes.container1}>
            <Typography variant='h6'>ICAR News</Typography>
            <Typography variant='h5'><a href='#' className='more'>More</a></Typography>
        </Box>
        <div className="marquee1">
        <span className={classes.animation}>
            <Typography><a href='#' className='hoverType'>Training Programme on 'ORGANIC GROWER' Ph:8098280123, 8903289738</a></Typography>
            <Typography><a href='#' className='hoverType'>Training Programme on 'ORGANIC GROWER' Ph:8098280123, 8903289738</a></Typography>
            <Typography><a href='#' className='hoverType'>Training Programme on 'ORGANIC GROWER' Ph:8098280123, 8903289738</a></Typography>
            <Typography><a href='#' className='hoverType'>Training Programme on 'ORGANIC GROWER' Ph:8098280123, 8903289738</a></Typography>
            <Typography><a href='#' className='hoverType'>Training Programme on 'ORGANIC GROWER' Ph:8098280123, 8903289738</a></Typography>

        </span>
</div>
    </div>
    </>
  );
}
