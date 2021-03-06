import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    volumeTitle: {
        margin: '25px 0',
        color: 'rgba(0,0,118,0.80)',
        fontSize: '20.8px'
    },
    volumeQuote: {
        float: 'right',
        marginLeft: '20px'
    },
    volume: {
        "& p": {
            lineHeight: '1.5rem'
        }
    },
    circle: {
        float: 'right',
        width: '300px',
        height: '300px',
        marginTop: '100px'
    },
    translationType: {
        "& h3": {
            fontSize: '1.3em',
            color: 'rgba(0,0,118,0.80)',
            margin: '25px 0'
        },
        "& p": {
            lineHeight: '1.5rem'
        },
        "& ul": {
            marginLeft: '35px',
            lineHeight: '1.3rem',
            "& a": {
                textDecoration: 'none',
                color: 'rgba(0,0,118,0.80)'
            }
        }
    },

    translationTech: {
        "& h3": {
            fontSize: '1.3em',
            color: 'rgba(0,0,118,0.80)',
            margin: '25px 0'
        },
        "& p": {
            lineHeight: '1.5rem'
        }
    },
    googleTranslate: {
         "& h3": {
            fontSize: '1.3em',
            color: 'rgba(0,0,118,0.80)',
            margin: '25px 0'
        },
        "& p": {
            lineHeight: '1.5rem'
        },
        "& ul": {
            marginLeft: '35px',
            lineHeight: '1.5rem'
        }
    },
    volumeLogoWrap: {
        display: 'flex',
        justifyContent: 'center'
    },
    volumeLogo: {
        width: '130px',
        height: '130px',
        marginTop: '15px',
    },
    [theme.breakpoints.down('xs')]: {
        volumeQuote: {
            width: '161.25px',
            height: '93.75px',
            marginBottom: '5px'
        },
        circle: {
            width: '120px',
            height: '120px',
            marginTop: '10px'
        },
        translationType: {
            "& ul": {
                lineHeight: '1.5rem'
            },
        }
    }
}))

export default useStyles