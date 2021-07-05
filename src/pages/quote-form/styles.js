import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    quoteFormWrap: {
        width: '95vw',
        maxWidth: '1280px',
        margin: '0 auto',
        "& > p": {
            lineHeight: '1.5rem',
            marginBottom: '30px'
        }
    },
    termAndCond: {
        textDecoration: 'none',
        color: 'rgba(0,0,118,0.80)',
        "&:hover": {
            textDecoration: 'underline'
        }
    },
    quoteFormHeader: {
        "& > h2": {
            fontSize: '32px',
            color: 'rgba(0,0,0,0.80)',
            margin: '25px 0'
        },
        "& > h3": {
            fontSize: '24px',
            color: 'rgba(0,0,0,0.40)',
            fontWeight: 'normal'
        }
    },
    quoteForm: {
        maxWidth: '60%',
        margin: "25px 0",
        "& > input": {
            width: '100%',
            margin: '5px 0',
            padding: '10px'
        },
        "& > p": {
            fontSize: '85%',
            margin: "10px 0 20px 25px",
            lineHeight: '1.4rem'
        },
        "& > textarea": {
            padding: '10px',
            width: '100%',
            maxWidth: '100%',
            minHeight: '80px',
            fontFamily: 'Lato'
        },
        "& > button": {
            padding: '10px',
            margin: '15px 0',
            "&:hover": {
                cursor: 'pointer'
            }
        }
    },
    quoteFile: {
        maxWidth: '190px'
    },
    [theme.breakpoints.down('xs')]: {
        quoteFormHeader: {
            "& > h2": {
                fontSize: '20.8px'
            },
            "& > h3": {
                fontSize: '16px'
            }
        },
        quoteForm: {
            maxWidth: '92%'
        }
    }
}));

export default useStyles;
