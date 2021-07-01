import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    transDetailWrap: {
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
        paddingLeft: "5px",
    },
    transDetail: {
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


    coreSection: {
        "& > h3": {
            fontSize: '20.8px',
            color: 'rgba(0,0,118,0.80)',
            margin: '25px 0'
        },
        "& > p": {
            lineHeight: "1.5rem",
        }
    },

    detailCardContainer: {
        maxWidth: '75vw',
        marginBottom: '30px'
    },
 
    servCardLink: {
        background: 'rgba(0,0,0,0.20)',
        display: 'block',
        padding: '15px',
        margin: '5px',
        textDecoration: 'none',
        color: '#000',
        "& > h3": {
            fontSize: '16px',
            color: 'rgba(0,0,118,0.80)',
            margin: '20px 0'
        },
        "& > p": {
            lineHeight: '1.5rem'
        },
        "&:hover": {
            background: 'rgba(0,0,118,0.80)',
            color: '#fff',
            "& > h3": {
                color: '#fff'
            }
        }
    },
    [theme.breakpoints.down("xs")]: {
        documentImg: {
            width: '56.25px',
            height: '56.25px',
            margin: '10px'
        },
        transDetail: {
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
        detailCardContainer: {
            maxWidth: '95vw'
        }
    },
}))

export default useStyles