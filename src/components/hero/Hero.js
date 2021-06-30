import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const Hero = () => {
    const classes = useStyles();
    return (
        <div className={classes.hero}>
            <h1>Translator UK Translation Agency</h1>
            <h2>Translator UK is an established translation agency with professional translators throughout the United Kingdom</h2>
            <Link className={classes.learnBtn} to="/about">Learn More</Link>
        </div>
    )
}

export default Hero
