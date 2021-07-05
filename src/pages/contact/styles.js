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
    contactRes: {
        color: 'rgba(0,0,118,0.80)',
        textDecoration: 'none',
        display: 'none',
        fontSize: '16px'
    },
    contactAddress: {
        width: '100%',
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
            maxWidth: 'inherit',
            fontFamily: 'Lato'
        },
        "& > button": {
            height: '40px',
            padding: '10px',
            "&:hover": {
                cursor: 'pointer'
            }
        }
    },
    [theme.breakpoints.down('xs')]: {
        contact: {
            "& > h2": {
                fontSize: '20.8px'
            }
        },
        contactTitleWrap: {
            flexDirection: 'column',
            "& > h3": {
                marginRight: 0,
                fontSize: '16px'
            },
        },
        contactHR: {
            display: 'none'
        },
        contactRes: {
            display: 'inline'
        },
        contactAddress: {
            flexDirection: 'column',
            width: '90%',
            margin: '0 auto'
        },
        contactEmail: {
            order: '2',
            fontSize: '22px',
            justifyContent: 'center',
            marginTop: '-40px',
            "& > p": {
                fontSize: '110px',
                order: '1',
                paddingLeft: 0
            },
            "& > div": {
                order: '2',
                fontSize: '20px'
            }
        },
        contactPhone: {
            order: '1',
            fontSize: '27.2px',
            justifyContent: 'center',
            "& > p": {
                fontSize: '102px',
            },
            "& > div": {
                fontSize: '20px'
            }
        },
        contactFormWrap: {  
            maxWidth: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            "& > input": {
                width: '90%',
            },
            "& > textarea": {
                width: '90%'
            },
            "& > button": {
                width: 'fit-content'
            }
        },
        contactQuote: {
            width: '162px',
            height: '94px',
            paddingBottom: '5px'
        }
    }
}));

export default useStyles;
