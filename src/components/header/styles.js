import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    header: {
        display: 'flex',
        alignItems: "center",
        height: '151px',
        width: '95vw',
        maxWidth: '1280px',
        margin: '0 auto',
    },
    nav: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: '30px',
        flexGrow: 1,
        "& a": {
            textDecoration: 'none'
        },
        "& li": {
            color: 'rgb(0 0 118 / 80%)',
            fontSize: '95%',
            padding: '15px'
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
    },
    menu: {
        display: 'none',
    },
    resMenu: {
        display: 'none'
    },
    [theme.breakpoints.down('xs')]: {
        header: {
            height: '101px'
        },
        headerLogo: {
            width: '65%'
        },
        menu: {
            display: 'block',
            fontSize: '42px',
            color: 'rgba(0,0,118,0.80)',
            position: 'absolute',
            top: '20px',
            left: '120px'
        },
        nav: {
            display: 'none',
        },
        headerBtn: {
            marginLeft: "auto",
            padding: '8px'
        },
        resMenu: {
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100vw',
            height: '100vh',
            background: 'white',
            zIndex: '1000',
            "& a": {
                textDecoration: 'none'
            },
            "& > ul": {
                listStyle: 'none',
                color: 'rgb(0 0 118 / 80%)',
                lineHeight: '30px'
            },
            "& li": {
                padding: '20px',
                borderTop: '1px solid rgb(0 0 118 / 80%)',
                borderBottom: '1px solid rgb(0 0 118 / 80%)',
                minHeight: '26px',
                width: '100%',
                paddingLeft: '100px',
            }
        }
    }
}))

export default useStyles