import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    legal: {
        width: '95vw',
        maxWidth: '1280px',
        margin: '0 auto',
        marginTop: '2px'
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
        fontSize: '24px',
        color: 'rgba(0,0,0,0.40)'
    },
    legalTitleWrap: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    legalText: {
        lineHeight: '1.5rem'
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
        }
    }
}));

export default useStyles;
