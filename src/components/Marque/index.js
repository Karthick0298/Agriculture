import { makeStyles, Typography,Box } from "@material-ui/core";
import './marque.css'
const useStyles = makeStyles((theme) => ({
    container: {
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
            padding: 8
        } 
    }
}))

function Marque() {
    const classes = useStyles()
    return (<>
        <Box className={classes.container}>
            <Typography variant='h6'>ICAR News</Typography>
            <Typography variant='h5'><a href='#' className='more'>More</a></Typography>
        </Box>
        <div className="marquee">
        <span className={classes.animation}>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>
            <Typography><a href='#' className='hoverType'>Solar Pumps - Govt.Schemes</a></Typography>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>
            <Typography><a href='#' className='hoverType'>Staff Recruitment- 2020</a></Typography>

        </span>
</div>
</>
    )
}

export default Marque
