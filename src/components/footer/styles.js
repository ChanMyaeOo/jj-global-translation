import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        display: 'flex',
        width: '90vw',
        maxWidth: '1280px',
        margin: '0 auto',
        marginTop: '25px'
    },
    copyright: {
        maxWidth: '330px',
        lineHeight: '1.3rem'
    },
    copyrightText: {
        fontSize: '16px',
        color: '#494949'
    },
    copyrightAddress: {
        fontSize: '12.8px',
        color: '#494949'
    },
    footerLinks: {
        display: 'flex',
        justifyContent: 'space-between',
        "& li": {
            listStyle: 'none',
        },
        "& li a": {
            color: '#000',
            fontSize: '15px',
            textDecoration: 'none',
            "&:hover": {
                textDecoration: 'underline'
            }
        }
    },
    footerRight: {
        flexGrow: 1
    },
    footerIcons: {
        display: 'flex',
        justifyContent: 'center',
        margin: '60px 0',
        paddingRight: '40px'
    },
    footerIcon: {
        width: '50px',
        height: '50px',
        margin: '0 25px',
        opacity: '0.5',
        "&:hover": {
            opacity: '0.9'
        }
    },
    [theme.breakpoints.down('xs')]: {
        footer: {
            flexDirection: 'column'
        },
        copyright: {
            textAlign: 'center'
        },
        footerIcons: {
            display: 'none'
        },
        footerLinks: {
            margin: '25px 0',
            flexWrap: 'wrap',
            "& li": {
                margin: "10px"
            }
        }
    }
}))

export default useStyles