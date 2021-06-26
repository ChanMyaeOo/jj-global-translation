import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    oddItem: {
        backgroundColor: 'rgba(0,0,0,0.20)'
    },
    evenItem: {
        backgroundColor: 'rgba(0,0,0,0.10)'
    },
    item: {
        padding: '5px'
    },
    itemTitle: {
        display: 'block',
        padding: '15px',
        textDecoration: 'none',
        color: '#000',
        "&:hover": {
            backgroundColor: 'rgba(0,0,118,0.80)',
            color: '#f2f2f2'
        }
    },
    [theme.breakpoints.down('xs')]: {
        item: {
            padding: '5px 0'
        }
    }
}))

export default useStyles