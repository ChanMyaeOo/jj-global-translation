import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    searchWrap: {
        display: 'flex',
        justifyContent: 'center'
    },
    search: {
        width: '95vw',
        maxWidth: '1280px',
        display: 'flex',
        justifyContent: 'flex-end',
        height: '40px',
        padding: '3px 0',
        alignItems: 'center'
    },
    searchInput: {
        padding: '0 5px',
        height: 'inherit',
        minWidth: '250px',
        border: '1px solid #e0e0e0'
    },
    searchBtn: {
        height: 'inherit',
        padding: '0 15px',
        marginLeft: '5px',
        border: '1px solid #e0e0e0',

    }
}))

export default useStyles