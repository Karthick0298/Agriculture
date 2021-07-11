import React from 'react'
import Questions from './Questions'
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        width: 1320,
        margin: 'auto',
        paddingBlock: 40,
        [theme.breakpoints.down('md')]: {
            width: '100%',
            margin: "auto",
          },
    }
}))
export default function Frequent() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Questions/>
        </div>
    )
}
