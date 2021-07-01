import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    serviceDetailWrap: {
        width: "95vw",
        maxWidth: "1280px",
        margin: "0 auto",
    },
    documentImg: {
        float: "left",
        width: "300px",
        height: "300px",
        opacity: "0.8",
        marginRight: "20px",
        marginBottom: '55px'
    },
    quote: {
        float: "right",
        paddingLeft: "15px",
    },
    serviceDetail: {
        marginBottom: "65px",
        "& > h2": {
            fontSize: "32px",
            color: "rgba(0,0,0,0.80)",
            margin: "25px 0",
        },
        "& > h3": {
            fontSize: "24px",
            color: "rgba(0,0,0,0.40)",
            fontWeight: "normal",
            marginBottom: "25px",
        },
        "& > p": {
            lineHeight: "1.5rem",
        },
    },
    moreAbout: {
        "& > h3": {
            color: "rgba(0,0,118,0.80)",
            fontSize: "20.8px",
            margin: "25px 0",
        },
        "& > p": {
            lineHeight: "1.5rem",
        },
    },
    moreAboutList: {
        marginLeft: "25px",
        lineHeight: "1.5rem",
    },
    commonServices: {
        "& > h3": {
            color: "rgba(0,0,118,0.80)",
            fontSize: "20.8px",
            margin: "25px 0",
        },
        "& > p": {
            lineHeight: "1.5rem",
        },
    },
    comServiceGrid: {
        width: "60vw",
        marginBottom: "120px",
    },
    comServiceItem: {
        background: "rgba(0,0,0,0.30)",
        color: "#fff",
        padding: "15px",
        display: "block",
        margin: "5px",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: 'rgba(0,0,118,0.80)',
            color: '#fff'
        }
    },
    otherTransServices: {
        marginBottom: '35px',
        "& > h3": {
            color: "rgba(0,0,118,0.80)",
            fontSize: "20.8px",
            margin: "25px 0",
        },
        "& > p": {
            lineHeight: "1.5rem",
        }
    },
    bigCircle: {
        width: "300px",
        height: "300px",
        float: "right",
    },
    otherServiceGrid: {
        width: "76vw",
    },
    item: {
        padding: "5px",
    },
    itemTitle: {
        display: "block",
        padding: "15px",
        textDecoration: "none",
        color: "rgba(0,0,0,0.80)",
        backgroundColor: "rgba(0,0,0,0.20)",
        "&:hover": {
            backgroundColor: "rgba(0,0,118,0.80)",
            color: "#f2f2f2",
        },
    },
    [theme.breakpoints.down("xs")]: {
        documentImg: {
            width: '56.25px',
            height: '56.25px',
            margin: '10px'
        },
        serviceDetail: {
            "& > h2": {
                fontSize: '22.4px',
                color: 'rgba(0,0,118,1.0)',
            },
            "& > h3": {
                fontSize: '15px'
            }
        },
        quote: {
            width: '162px',
            height: '94px',
            paddingBottom: '4px'
        },
        bigCircle: {
            width: '120px',
            height: '120px',
            marginBottom: '15px'
        },
        comServiceGrid: {
            width: '95vw',
            marginBottom: '25px'
        },
        item: {
            padding: "5px 0",
        },
        otherServiceGrid: {
            width: "92vw",
        },
    },
}));

export default useStyles;
