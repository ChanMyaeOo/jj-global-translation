import { makeStyles } from '@material-ui/core/styles';
import HeroImg from '../../images/translation.jpg'

const useStyles = makeStyles(theme => ({
    translation: {
        background: `linear-gradient( rgba(255, 255, 255, 0.1) 100%, rgba(0, 0, 0, 0.1) 100%),url(${HeroImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center center",
        paddingBottom: '40px',
        "& h1": {
            textAlign: 'center',
            fontSize: '3.8em',
            color: '#f2f2f2',
            marginBottom: '30px'
        },

        "& h2": {
            fontSize: '3em',
            maxWidth: '70vw',
            textAlign: 'center',
            margin: '0 auto',
            marginTop: '10px',
            color: '#f2f2f2',
            fontWeight: 'normal',
        }
    },
    learnBtn: {
        padding: '15px',
        textAlign: 'center',
        display: 'block',
        margin: '0 auto',
        fontWeight: 'bold',
        fontSize: '1.5em',
        backgroundColor: 'rgba(0,0,118,0.70)',
        color: '#f2f2f2',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        marginTop: '60px',
        width: 'fit-content',
        textDecoration: 'none',
        "&:hover": {
            backgroundColor: 'rgba(0,0,118,0.9)',
        }
    },
    [theme.breakpoints.down('xs')]: {
        translation: {
            paddingBottom: '2px',
            "& h1": {
                fontSize: '20.8px',
                textAlign: 'left',
                marginLeft: '18px',
                marginBottom: '15px',
                paddingTop: '25px'
            },

            "& h2": {
                fontSize: '16px',
                textAlign: 'left',
                maxWidth: '90vw'
            }
        },
        learnBtn: {
            fontSize: '16px',
            padding: '10px',
            marginTop: '15px'
        }
    }
}))

export default useStyles