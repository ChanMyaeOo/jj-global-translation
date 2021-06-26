import React from 'react'
import Circle from '../../images/circle.webp'
import useStyles from './styles'

const Quality = () => {
    const classes = useStyles();
    return (
        <div className={classes.qualitySection}>
            <img src={Circle} alt="circle" className={classes.circle} />
            <h3>Quality Assurance</h3>
            <p>Translator UK prides itself on the ability to provide the highest quality of work at the best price possible. Our experienced team of project managers are constantly searching for better translators that work at better prices in order to offer the ultimate combination of quality and price for our clients.</p>
            <p className={classes.qualityText}>Well over a decade operating as a professional translation agency in the UK has allowed us to grow and refine our network of translation professionals at our clients disposal.</p>
            <hr />
        </div>
    )
}

export default Quality
