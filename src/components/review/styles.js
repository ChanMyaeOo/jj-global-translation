import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    reviewWrapper: {
        maxWidth: '1280px',
        margin: '0 auto'
    },
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
            margin: '20px 0 5px 0'
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
    smallLogoWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    reviewLogo: {
        width: '130px',
        height: '130px',
        marginTop: '10px'
    },
    reviewLink: {
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'rgba(0,0,118,0.80)',
    },
    [theme.breakpoints.down('xs')]: {
        review: {
            flexDirection: 'column',
            paddingBottom: '10px'
        },
        starReview: {
            fontSize: '56px',
            marginLeft: '10px'
        },
        leftReview: {
            minWidth: 0
        },
        rightReview: {
            "& p": {
                marginTop: '10px',
                paddingLeft: 0
            }
        },
    }
}))

export default useStyles