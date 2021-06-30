import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    about: {
        width: "95vw",
        maxWidth: "1280px",
        margin: "0 auto",
        marginTop: "2px",
        paddingBottom: "25px",
    },
    aboutWrap: {
        marginTop: "-50px",
    },
    aboutTitle: {
        fontSize: "32px",
        color: "rgba(0,0,0,0.80)",
        margin: "25px 0",
    },
    aboutSubTitle: {
        fontSize: "1.5em",
        color: "rgba(0,0,0,0.40)",
        fontWeight: "normal",
        marginBottom: "20px",
    },
    aboutText: {
        lineHeight: "1.5rem",
    },
    aboutNetwork: {
        "& > h3": {
            color: "rgba(0,0,118,0.80)",
            fontSize: "20.8px",
            margin: "25px 0",
        },
        "& > p": {
            lineHeight: "1.5rem",
        },
        "& > ul": {
            lineHeight: "1.5rem",
            marginLeft: "30px",
            marginBottom: "25px",
        },
    },
    aboutLocation: {
        "& > h3": {
            color: "rgba(0,0,118,0.80)",
            fontSize: "20.8px",
            margin: "25px 0",
        },
    },
    aboutLocWrap: {
        maxWidth: "70%",
    },
    locImage: {
        width: "120px",
        height: "120px",
        "&:hover": {
            opacity: "0.8"
        }
    },
    bigCircle: {
        width: "300px",
        height: "300px",
        float: "right",
        paddingLeft: '25px'
    },
    aboutLinkedin: {
        width: '150px',
        height: '150px',
        marginTop: '25px'
    },
    aboutMoreInfo: {
        "& > h3": {
            color: "rgba(0,0,118,0.80)",
            fontSize: "20.8px",
            margin: "25px 0",
        },
        "& > p": {
            lineHeight: "1.5rem",
        },
    },
    [theme.breakpoints.down('xs')]: {
        aboutWrap: {
            marginTop: '-25px'
        },
        aboutTitle: {
            fontSize: '20.8px'
        },
        aboutSubTitle: {
            fontSize: '16px'
        },
        aboutLocation: {
            "& > h3": {
                lineHeight: '1.8rem',
                marginBottom: '10px'
            }
        },
        aboutLocWrap: {
            maxWidth: '90%',
            margin: '0 auto'
        },
        bigCircle: {
            width: '120px',
            height: '120px',
            marginTop: '20px',
            paddingLeft: 0
        },
        aboutLinkedin: {
            width: '150px',
            height: '150px'
        }
    }
}));

export default useStyles;
