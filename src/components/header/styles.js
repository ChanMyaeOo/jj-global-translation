import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        alignItems: "center",
        height: '151px',
        width: '95vw',
        maxWidth: '1280px',
        margin: '0 auto'
    },
    nav: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: '30px',
        flexGrow: 1,
        "& li": {
            padding: "0 25px",
            color: 'rgb(0 0 118 / 80%)',
            padding: '15px',
            fontSize: '95%'
        },
        "& li:hover": {
            cursor: 'pointer',
            background: 'rgba(0,0,118,0.20)'
        }
    },
    headerBtn: {
        backgroundColor: 'rgba(0,0,118,0.80)',
        fontSize: '95%',
        fontWeight: 'bold',
        color: 'rgba(255,255,255,1.00)',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        padding: '15px',
        "&:hover": {
            textDecoration: 'underline',
        }
    }
}))

export default useStyles