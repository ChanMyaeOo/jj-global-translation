import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Item = ({ oddItem, title, id }) => {
    const classes = useStyles();
    return (
        <Grid item md={4} xs={12} className={classes.item}>
            <div className={oddItem ? classes.oddItem : classes.evenItem}>
                <Link className={classes.itemTitle} to={`/services/${id}`}>
                    {title}
                </Link>
            </div>
        </Grid>
    )
}

export default Item
