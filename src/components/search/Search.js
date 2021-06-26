import React from 'react'
import useStyles from './styles'

const Search = () => {
    const classes = useStyles();
    return (
        <div className={classes.searchWrap}>
            <div className={classes.search}>
                <input type="search" placeholder="Search Translator UK ..." className={classes.searchInput} />
                <button className={classes.searchBtn}>Go</button>
            </div>
        </div>
    )
}

export default Search