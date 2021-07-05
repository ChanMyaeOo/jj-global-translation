import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    legal: {
        width: '95vw',
        maxWidth: '1280px',
        margin: '0 auto',
        marginTop: '2px',
        paddingBottom: '25px'
    },
    legalWrap: {
        marginTop: '-50px'
    },
    legalTitle: {
        fontSize: '32px',
        color: 'rgba(0,0,0,0.80)',
        marginRight: '60px'
    },
    legalSubTitle: {
        fontSize: '22px',
        color: 'rgba(0,0,0,0.40)',
        fontWeight: 'normal'
    },
    legalTitleWrap: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    legalText: {
        lineHeight: '1.5rem'
    },
    legalTypes: {
        maxWidth: '80%',
        display: 'flex',
        paddingLeft: '10px',
        margin: '20px 0',
        "& > a": {
            padding: '15px',
            width: '100%',
            background: 'rgba(0,0,0,0.20)',
            margin: '5px',
            textDecoration: 'none',
            color: 'rgba(0,0,0,0.80)',
            "&:hover": {
                background: 'rgba(0,0,118,0.80)',
                color: '#f2f2f2'
            }
        }
    },
    legalQuote: {
        float: 'right',
        marginTop: '10px',
        paddingLeft: '15px'
    },
    legalItemTitle: {
        textDecoration: 'none',
        fontSize: '19.2px',
        color: 'rgba(0,0,118,0.80)',
        fontWeight: 'bold',
        display: 'block',
        margin: '20px 0'
    },
    legalItemText: {
        lineHeight: '1.5rem',
        marginBottom: '30px'
    },
    legalCircle: {
        float: 'right',
        width: '300px',
        height: '300px',
        marginTop: '65px',
        paddingLeft: '15px'
    },
    legalQuestion: {
        "& > h3": {
            fontSize: '1.2em',
            color: 'rgba(0,0,0,0.40)',
            marginBottom: '25px'
        },
        "& > p": {
            lineHeight: '1.5rem',
            marginBottom: '25px'
        },
        "& > ul": {
            marginLeft: '35px',
            lineHeight: '1.5rem'
        }
    },
    [theme.breakpoints.down('xs')]: {
        legalTitleWrap: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: '10px'
        },
        legalTitle: {
            fontSize: '1.3em',
            marginRight: 0,
            marginBottom: '20px'
        },
        legalSubTitle: {
            fontSize: '1em',
            lineHeight: '1.5rem'
        },
        legalWrap: {
            marginTop: 0
        },
        legalTypes: {
            flexDirection: 'column',
        },
        legalQuote: {
            width: '161.25px',
            height: '93.75px',
        },
        legalCircle: {
            width: '120px',
            height: '120px',
            marginTop: '10px'
        }
    }
}));

export default useStyles;
