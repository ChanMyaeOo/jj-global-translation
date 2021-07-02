import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    priceHeader: {
        fontSize: "24px",
        color: "rgba(0,0,0,0.40)",
        fontWeight: "normal",
        margin: "25px 0",
    },
    priceQuote: {
        float: "right",
        marginLeft: "20px",
        marginTop: "10px",
    },
    prices: {
        width: "95vw",
        maxWidth: "1280px",
        margin: "0 auto",
        "& h2": {
            color: "rgba(0,0,0,0.80)",
            fontSize: "2em",
            margin: "25px 0",
        },
        "& p": {
            lineHeight: "1.5rem",
            marginBottom: "35px",
        },
    },
    priceTitle: {
        // width: "67vw",
        width: '100%',
        marginLeft: "40px",
        "& h3": {
            fontSize: "19.2px",
            color: "rgba(0,0,118,0.80)",
            fontWeight: "bold",
            margin: "25px 0",
        },
        "& p": {
            lineHeight: "1.5rem",
        },
    },
    [theme.breakpoints.down("xs")]: {
        priceHeader: {
            fontSize: "16px",
            margin: "15px 0",
        },
        priceQuote: {
            marginLeft: "15px",
            width: "161.25px",
            height: "93.75px",
            marginBottom: "5px",
        },
        prices: {
            "& h2": {
                fontSize: "20.8px",
                margin: "10px 0",
            },
            "& p": {
                lineHeight: "1.5rem",
                marginBottom: "35px",
            },
        },
        priceTitle: {
            marginLeft: 0,
            width: "95vw",
            "& h3": {
                marginTop: "30px",
            },
            "& div": {
                padding: "10px",
            },
        },
    },
}));

export default useStyles;
