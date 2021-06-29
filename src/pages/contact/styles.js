import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    contact: {
        width: '95vw',
        maxWidth: '1280px',
        margin: '0 auto',
        "& > h2": {
            fontSize: '32px',
            color: 'rgba(0,0,0,0.80)',
            margin: '25px 0'
        }
    },
    contactTitleWrap: {
        display: 'flex',
        alignItems: 'center',
        "& > h3": {
            fontSize: '24px',
            color: 'rgba(0,0,0,0.40)',
            marginRight: '80px',
            fontWeight: 'normal'
        },
    },
    contactHR: {
        fontSize: '19.2px',
        color: 'rgba(0,0,118,0.80)',
        textDecoration: 'none',
    },
    contactAddress: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    contactEmail: {
        fontSize: '40px',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#000',
        "& > p": {
            fontSize: '240px',
            paddingLeft: "20px"
        },
        "&:hover": {
            color: 'rgba(0,0,118,0.80)'
        }
    },
    contactPhone: {
        fontSize: '40px',
        textDecoration: 'none',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#000',
         "& > p": {
            fontSize: '200px',
            paddingLeft: "20px"
        },
        "&:hover": {
            color: 'rgba(0,0,118,0.80)'
        }
    },
    contactForm: {
        marginBottom: '35px',
        "& > h3": {
            fontSize: '1.3em',
            color: 'rgba(0,0,118,0.80)',
            margin: '25px 0'
        },
        "& > p": {
            lineHeight: '1.5rem'
        }
    },
    contactQuote: {
        float: 'right',
        marginLeft: '15px'
    },
    contactFormWrap: {
        maxWidth: '625px',
        marginTop: '25px',
        "& > input": {
            width: '100%',
            height: '40px',
            marginBottom: '15px',
            padding: '0 10px'
        },
        "& > textarea": {
            width: '100%',
            height: '160px',
            marginBottom: '10px',
            padding: '10px',
            maxWidth: 'inherit'
        },
        "& > button": {
            height: '40px',
            padding: '10px'
        }
    }
}));

export default useStyles;
