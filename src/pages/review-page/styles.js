import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    reviewPageWrap: {
        width: '95vw',
        maxWidth: '1280px',
        margin: '0 auto',
        marginBottom: '35px'
    },
    reviewPage: {
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
    socialWrap: {
        display: 'flex',
        flexDirection: 'column'
    },
    gmapsWrap: {
        width: '50%',
        background: 'rgba(0,0,0,0.09)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px',
        "& > p": {
            fontSize: '19.2px',
            color: 'rgba(0,0,0,0.40)',
            fontWeight: 'bold',
        }
    },
    gmaps: {
        width: '250px',
        height: '250px',
        opacity: '0.5',
        "&:hover": {
            opacity: 1
        }
    },
    yelp: {
        width: '220px',
        height: '220px',
        opacity: '0.5',
        "&:hover": {
            opacity: 1
        }
    },
    yelpWrap: {
        width: '50%',
        background: 'rgba(0,0,0,0.09)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px',
        "& > p": {
            fontSize: '19.2px',
            color: 'rgba(0,0,0,0.40)',
            fontWeight: 'bold',
            paddingTop: '20px'
        }
    },
    facebook: {
        width: '190px',
        height: '190px',
        opacity: '0.5',
        "&:hover": {
            opacity: 1
        }
    },
    facebookWrap: {
        width: '50%',
        background: 'rgba(0,0,0,0.09)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px',
        "& > p": {
            fontSize: '19.2px',
            color: 'rgba(0,0,0,0.40)',
            fontWeight: 'bold',
            paddingTop: '20px'
        }
    },
    trustpilotSvg: {
        width: '270px',
        height: '270px',
        opacity: '0.5',
         "&:hover": {
            opacity: 1
        }
    },
    trustpilot: {
        width: '190px',
        height: '190px',
        opacity: '0.5',
        display: 'none',
        "&:hover": {
            opacity: 1
        }
    },
    trustpilotWrap: {
         width: '50%',
        background: 'rgba(0,0,0,0.09)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px',
        "& > p": {
            fontSize: '19.2px',
            color: 'rgba(0,0,0,0.40)',
            fontWeight: 'bold',
        }
    },
    socials: {
        display: 'flex',
        minHeight: '400px'
    },
    [theme.breakpoints.down('xs')]: {
        reviewPage: {
            "& > h2": {
                fontSize: '16px'
            },
            "& > h3": {
                fontSize: '16px'
            }
        },
        socials: {
            flexDirection: 'column'
        },
        gmapsWrap: {
            width: '100%',
            margin: "5px 0",
            padding: '20px 0'
        },
        yelpWrap: {
            width: '100%',
            margin: "5px 0",
            padding: '20px 0'
        },
        facebookWrap: {
            width: '100%',
            margin: "5px 0",
            padding: '20px 0'
        },
        trustpilotWrap: {
            width: '100%',
            margin: "5px 0",
            padding: '20px 0'
        },
        gmaps: {
            width: '150px',
            height: '150px'
        },
        yelp: {
            width: '150px',
            height: '150px'
        },
        facebook: {
            width: '120px',
            height: '120px'
        },
        trustpilotSvg: {
            display: 'none'
        },
        trustpilot: {
            display: 'block',
            width: '120px',
            height: '120px'
        }
    }
}));

export default useStyles;
