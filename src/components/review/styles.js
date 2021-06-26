import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    review: {
        display: 'flex',
        width: '95vw',
        maxWidth: '1280px',
        margin: '0 auto',
        paddingBottom: '20px'
    },
    leftReview: {
        minWidth: '490px',
        "& h3": {
            color: 'rgba(0,0,118,0.80)',
            fontSize: '20.8px',
            margin: '20px 0 10px 0'
        }
    },
    rightReview: {
        "& p": {
            marginTop: '87px',
            lineHeight: '1.5rem',
            paddingLeft: '42px'
        }
    },
    starReview: {
        fontSize: '95px',
        textDecoration: 'none',
        color: '#001',
        "&:hover": {
            color: 'rgba(0,0,118,0.80)',
        }
    },
    reviewLogo: {
        width: '75px',
        height: '75px',
        display: 'block',
        margin: '0 auto',
        marginTop: '30px'
    },
    reviewLink: {
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'rgba(0,0,118,0.80)',
    }
}))

export default useStyles