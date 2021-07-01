import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import Content from './content/Content'

const Translation = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.translation}>
                <h1>Translator UK Translation Services</h1>
                <h2>Translator UK provides professional translation services throughout the United Kingdom</h2>
                <Link className={classes.learnBtn} to="/languages">Learn More</Link>
            </div>

            <Content />
        </>
    )
}

export default Translation
