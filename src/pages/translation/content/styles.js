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
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '80%',
        "& h3": {
            fontSize: '19.2px',
            color: 'rgba(0,0,0,0.40)',
            paddingLeft: '18px',
            paddingTop: '10px'
        }
    },
    selectionWrap: {
        display: 'flex',
        justifyContent: 'center',
        margin: '10px 20px 0 0'
    },
    selectionTitle: {
        margin: '30px 0 25px 0',
        color: 'rgba(0,0,118,0.80)'
    },
    selectionItem: {
        height: '38px',
        backgroundColor: 'rgba(255,255,255,1.00)',
        color: 'rgba(0,0,118,0.80)',
        margin: '5px 10px',
        minWidth: '240px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    [theme.breakpoints.down('xs')]: {
        content: {
            margin: '20px auto',
            width: '90vw'
        }
    }
}))

export default useStyles