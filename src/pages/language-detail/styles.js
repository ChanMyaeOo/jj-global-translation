import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    languageDetailWrap: {
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
        marginBottom: "55px",
    },
    quote: {
        float: "right",
        paddingLeft: "5px",
    },
    languageDetail: {
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

    comLanguageTrans: {
        "& > h3": {
            fontSize: "20.8px",
            color: "rgba(0,0,118,0.80)",
            margin: "25px 0",
        },
        "& > p": {
            lineHeight: "1.5rem",
        },
    },

    officialTitle: {
        margin: "25px 0",
    },

    standardTitle: {
        margin: "25px 0",
    },

    officialItem: {
        maxWidth: "75vw",
    },

    standardItem: {
        maxWidth: "75vw",
        marginBottom: "30px",
    },

    offItem: {
        display: "block",
        padding: "15px",
        background: "rgba(0,0,0,0.10)",
        margin: "5px",
        textDecoration: "none",
        color: "#000",
        "&:hover": {
            background: "rgba(0,0,118,0.80)",
            color: "#fff",
        },
    },

    languageReview: {
        "& > h3": {
            fontSize: "20.8px",
            color: "rgba(0,0,118,0.80)",
            margin: "25px 0",
        },
    },

    reviewHeader: {
        display: "flex",
        "& > p": {
            lineHeight: "1.5rem",
        },
    },

    languageStar: {
        minWidth: "400px",
        fontSize: "95px",
        textDecoration: "none",
        color: "#000",
        marginRight: "60px",
        "&:hover": {
            color: "rgba(0,0,118,0.80)",
        },
    },

    rightBox: {
        maxWidth: "600px",
        background: 'rgba(0,0,118,0.80)',
        marginLeft: 'auto',
        marginRight: '150px',
        padding: '20px',
        color: '#f2f2f2',
        "& > h3": {
            color: '#fff',
            fontSize: '20.8px',
            margin: "20px 0"
        },
        "& > p": {
            lineHeight: "1.5rem"
        },
        "& > ul": {
            lineHeight: "1.5rem",
            paddingLeft: '25px'
        }
    },

    leftBox: {
        maxWidth: "600px",
        background: 'rgba(0,0,118,0.80)',
        padding: '20px',
        color: '#f2f2f2',
        opacity: '0.5',
        margin: '25px 0',
        "& > h3": {
            color: '#fff',
            fontSize: '20.8px',
            margin: "20px 0"
        },
        "& > p": {
            lineHeight: "1.5rem"
        },
    },

    envelop: {
        fontSize: '60px',
        color: '#fff',
        textDecoration: 'none',
    },

    moreAboutLang: {
        "& > h3": {
            fontSize: '20.8px',
            color: 'rgba(0,0,118,0.80)',
            marginTop: '25px'
        },
        "& > h4": {
            fontSize: '20.8px',
            color: 'rgba(0,0,0,0.40)',
            margin: '25px 0'
        },
        "& > p": {
            lineHeight: '1.5rem'
        },
        "& > ul": {
            marginLeft: '25px',
            "& a": {
                textDecoration: 'none',
                lineHeight: '1.5rem'
            },
            "& a:hover": {
                textDecoration: 'underline'
            }
        }
    },
    smallLogoWrap: {
        display: 'flex',
        justifyContent: 'center'
    },
    smallLogo: {
        width: '75px',
        height: '75px',
        marginBottom: '20px'
    },

    [theme.breakpoints.down("xs")]: {
        documentImg: {
            width: "56.25px",
            height: "56.25px",
            margin: "10px",
        },
        languageDetail: {
            "& > h2": {
                fontSize: "22.4px",
                color: "rgba(0,0,118,1.0)",
            },
            "& > h3": {
                fontSize: "15px",
            },
        },
        quote: {
            width: "162px",
            height: "94px",
            paddingBottom: "4px",
        },

        officialItem: {
            maxWidth: "95vw",
        },
        standardItem: {
            maxWidth: "95vw",
        },
        reviewHeader: {
            flexDirection: 'column',
        },
        languageStar: {
            minWidth: '95vw',
            marginRight: 0,
            fontSize: '56px',
            textAlign: 'center'
        },
        rightBox: {
            maxWidth: '95vw',
            marginRight: 0,
            marginTop: '25px'
        }
    },
}));

export default useStyles;
