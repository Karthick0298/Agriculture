import React from 'react'
import { makeStyles, Box } from "@material-ui/core";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        width: 1320,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 0px'
    },
    font: {
        '& .MuiTypography-h1': {
            textTransform: 'uppercase',
            fontSize: 58,
            fontWeight:700,
            color: theme.palette.primary.dark
        },
        '& .MuiTypography-h2': {
            display: 'flex',
            textTransform: 'uppercase',
            fontSize: 26,
            fontWeight:700,
            justifyContent: 'center',
            color: theme.palette.primary.dark
        }
    }
}))
export default function HeaderOne() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Box>
            <img src='./images/TNBRD-logo.png' alt='logo' width={105} height={95}/>
            </Box>
            <Box className={classes.font}>
                <Typography variant='h1'>
                    ICAR Krishi Vigyan Kendra 
                </Typography>
                <Typography variant='h2'>
                    Krishnagiri district, Tamilnadu 
                </Typography>
            </Box>
            <Box>
            <img src='./images/icarlogo.jpg' alt='logo' width={85} height={118}/>
            </Box>
        </div>
    )
}
