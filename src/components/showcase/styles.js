import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    showcase: {
        width: '95vw',
        maxWidth: '1280px',
        margin: '0 auto',
        marginTop: '55px',
        lineHeight: '1.5rem',
        "& > h3": {
            margin: "15px 0",
            color: 'rgba(0,0,118,0.80)'
        }
    },
    showcaseContent: {
        padding: '20px 0'
    },
    quote: {
        float: 'right',
    },
    showcaseService: {
        width: '73vw',
        marginTop: '25px',
        marginBottom: '40px',
        maxWidth: '1280px'
    },

    [theme.breakpoints.down('xs')]: {
        showcase: {
            marginTop: '15px',
            padding: '0 15px',
            "& > h3": {
                fontSize: '20.8px',
                margin: '20.8px 0'
            }
        },
        quote: {
            width: '161.25px',
            height: '93.75px',
            margin: '5px 15px'
        },
        showcaseService: {
            width: '92vw',
        }
    }
}))

export default useStyles