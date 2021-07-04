import { makeStyles } from "@material-ui/core/styles";
// import CompHeroImg from '../../images/jj-hero.jpg'
import CompHeroImg from '../../images/hero-logo.jpg'

const useStyles = makeStyles((theme) => ({
    heroWrap: {
        position: "relative",
        width: "100%",
        height: "470px",
        marginTop: "1px",
    },
    compVideoWrap: {
        width: "50%",
        height: "100%",
        position: "absolute",
        left: 0,
        zIndex: "-1",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    compVideo: {
        position: "relative",
        width: "auto",
        minWidth: "100%",
        height: "auto",
    },
    rightHalf: {
        width: "50%",
        position: "absolute",
        right: 0,
        height: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    rightContent: {
        // background: `linear-gradient( rgba(255, 255, 255, 0.1) 100%, rgba(0, 0, 0, 0.1) 100%),url(${CompHeroImg})`,
        backgroundImage: `url(${CompHeroImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center -20px",
        width: "100%",
        minHeight: "360px",

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    heroTitle: {
        color: '#fff',
        fontSize: '45px',
        marginBottom: '20px'
    },
    heroSubTitle: {
        color: '#f2f2f2',
        fontSize: '27px',
        fontWeight: 'normal',
        textAlign: 'center',
        marginBottom: '20px'
    },
    learnBtn: {
        marginTop: '20px',
        padding: "15px",
        backgroundColor: 'rgba(0,0,118,0.70)',
        color: '#f2f2f2',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '18px',
        textDecoration: 'none',
        "&:hover": {
            backgroundColor: 'rgba(0,0,118,0.9)',
        }
    },
    [theme.breakpoints.down('xs')]: {
        heroWrap: {
            maxHeight: '240px',
            marginBottom: '30px'
        },
        compVideoWrap: {
            display: 'none'
        },
        rightHalf: {
            width: '100%',
            alignItems: 'flex-start'
        },
        rightContent: {
            minHeight: '100%',
            backgroundPosition: 'center 0',
            minHeight: "240px",
        },

        heroTitle: {
            fontSize: '20.8px',
            marginBottom: 0,
            marginTop: '15px'
        },
        heroSubTitle: {
            fontSize: '16px',
            marginTop: '10px',
            marginBottom: '10px'
        },
        learnBtn: {
            padding: '10px',
            fontSize: '16px',
            marginBottom: '5px'
        }
    }
}));

export default useStyles;
