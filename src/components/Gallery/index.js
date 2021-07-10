import React from 'react'
import Gallery from './Gallery'
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        width: 1320,
        margin: 'auto'
    }
}))

export default function GalleryLayout() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Gallery/>
        </div>
    )
}
