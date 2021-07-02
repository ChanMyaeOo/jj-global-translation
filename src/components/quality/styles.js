import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    circle: {
        float: 'right',
        width: '200px',
        height: '200px',
        marginLeft: '5px'
    },
    qualitySection: {
        width: '95vw',
        maxWidth: '1280px',
        margin: '0 auto',
        lineHeight: '1.5rem',
        "& h3": {
            fontSize: '20.8px',
            color: 'rgba(0,0,118,0.80)',
            margin: '25px 0'
        }
    },
    qualityText: {
        marginTop: '20px',
        paddingBottom: '45px'
    },
    [theme.breakpoints.down('xs')]: {
        circle: {
            width: '100px',
            height: '100px',
            margin: '16px 10px 0 10px'
        }
    }
}))

export default useStyles