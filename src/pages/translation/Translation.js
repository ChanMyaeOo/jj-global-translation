import React from 'react'
import useStyles from './styles'
import Content from './content/Content'

const Translation = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.translation}>
            
            </div>

            <Content />
        </>
    )
}

export default Translation
