import { makeStyles } from '@material-ui/core/styles';
import TransImg from '../../images/jj-translation.jpg'

const useStyles = makeStyles(theme => ({
    translation: {
        background: `linear-gradient( rgba(255, 255, 255, 0.1) 100%, rgba(0, 0, 0, 0.1) 100%),url(${TransImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: "center center",
        paddingBottom: '20px',
        height: '470px',
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
    [theme.breakpoints.down('xs')]: {
        translation: {
            paddingBottom: '2px',
            height: '160px',
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
    }
}))

export default useStyles