import React from 'react'
import useStyles from './styles'

const Hero = () => {
    const classes = useStyles();
    return (
        <div className={classes.hero}>
            <h1>Translator UK Translation Agency</h1>
            <h2>Translator UK is an established translation agency with professional translators throughout the United Kingdom</h2>
            <button className={classes.learnBtn}>Learn More</button>
        </div>
    )
}

export default Hero
