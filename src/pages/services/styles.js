import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    services: {
        width: "95vw",
        maxWidth: "1280px",
        margin: "0 auto",
        "& > p": {
            lineHeight: "1.5rem",
        },
    },
    servicesWrap: {
        display: "flex",
        alignItems: "center",
        margin: "25px 0",
        "& > h2": {
            fontSize: "32px",
            color: "rgba(0,0,0,0.80)",
            marginRight: "60px",
        },
        "& > h3": {
            fontSize: "24px",
            color: "rgba(0,0,0,0.40)",
            fontWeight: "normal",
        },
    },
    servicesItems: {
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
    servicesPrices: {
        "& > img": {
            float: 'right',
        },
        "& > h3": {
            fontSize: '1.3em',
            color: 'rgba(0,0,118,0.80)',
            marginBottom: '25px'
        },
        "& > p": {
            lineHeight: '1.5rem',
            marginBottom: '30px'
        }
    },
    [theme.breakpoints.down("xs")]: {
        servicesWrap: {
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "10px",
            "& > h2": {
                fontSize: "1.3em",
                marginRight: 0,
                marginBottom: "20px",
            },
            "& > h3": {
                fontSize: "1em",
                lineHeight: "1.5rem",
            },
        },
        servicesItems: {
            width: '100%',
            "& a": {
                padding: '10px',
                minHeight: '50px'
            }
        },
        servicesPrices: {
            "& > img": {
                width: '161px',
                height: '94px',
                paddingLeft: '15px'
            },
            "& > p": {
                marginBottom: '30px'
            }
        }
    },
}));

export default useStyles;
