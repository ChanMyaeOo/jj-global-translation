import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    languages: {
        width: '95vw',
        maxWidth: '1280px',
        margin: '0 auto',
        "& > h2": {
            fontSize: '32px',
            color: 'rgba(0,0,0,0.80)',
            margin: '25px 0'
        },
        "& > h3": {
            fontSize: '24px',
            color: 'rgba(0,0,0,0.40)',
            fontWeight: 'normal',
            marginBottom: '25px'
        },
        "& > p": {
            lineHeight: '1.5rem'
        }
    },
    languagesQuote: {
        float: 'right',
        marginLeft: '20px'
    },
    languagesServices: {
        marginTop: '25px',
        width: '85%',
        margin: '0 auto',
        marginBottom: '30px',
        "& a": {
            background: 'red',
            padding: '15px',
            display: 'block',
            width: '85%',
            margin: '5px',
            backgroundColor: 'rgba(0,0,0,0.30)',
            color: '#f2f2f2',
            textDecoration: 'none',
            "&:hover": {
                background: 'rgba(0,0,118,0.80)'
            }
        }
    },
    languagesSmLogo: {
        width: '75px',
        height: '75px',
        display: 'block',
        margin: '20px auto'
    },
    [theme.breakpoints.down('xs')]: {
        languages: {
            "& > h2": {
                fontSize: '16px'
            },
            "& > h3": {
                fontSize: '16px'
            }
        },
        languagesQuote: {
            width: '161.25px',
            height: '93.75px',
            marginLeft: '5px',
            marginBottom: '3px'
        },
        languagesServices: {
            width: '100%',
            "& a": {
                padding: '10px',
            }
        }
    }
}))

export default useStyles