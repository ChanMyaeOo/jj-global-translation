import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        width: '95vw',
        maxWidth: '1280px',
        margin: '50px auto',
        "& > p": {
            lineHeight: '1.5rem'       
        }
    },
    selectionContent: {
        display: 'flex',
    },
    selectionLeft: {
        maxWidth: '700px',
        "& p": {
            lineHeight: '1.5rem'
        }
    },
    selectionRight: {
        backgroundColor: 'rgba(0,0,0,0.20)',
        width: '100%',
        height: 'fit-content',
        paddingBottom: '10px',
        "& h3": {
            fontSize: '19.2px',
            color: 'rgba(0,0,0,0.40)',
            padding: '10px',
        }
    },
    selectionTitle: {
        margin: '30px 0 25px 0',
        color: 'rgba(0,0,118,0.80)'
    },
    selectionItemWrap: {
        display: 'flex'
    },
    selectionItem: {
        background: '#fff',
        width: '50%',
        padding: '10px',
        margin: '6px 13px',
        color: 'rgba(0,0,118,0.80)',
        textDecoration: 'none',
        "&:hover": {
            background: 'rgba(0,0,118,0.80)',
            color: '#fff'
        }
    },
    [theme.breakpoints.down('xs')]: {
        content: {
            margin: '20px auto',
            width: '90vw'
        },
        selectionContent: {
            flexDirection: 'column'
        },
        selectionRight: {
            marginTop: '35px'
        },
        selectionItem: {
            margin: '5px 10px'
        }
    }
}))

export default useStyles