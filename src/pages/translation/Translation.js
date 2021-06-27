import React from 'react'
import useStyles from './styles'
import Content from './content/Content'

const Translation = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.translation}>
                <h1>Translator UK Translation Services</h1>
                <h2>Translator UK provides professional translation services throughout the United Kingdom</h2>
                <button className={classes.learnBtn}>Learn More</button>
            </div>

            <Content />
        </>
    )
}

export default Translation
