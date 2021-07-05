import React from 'react'
import { Link } from 'react-router-dom'
import LogoMd from '../../images/jj-logo-md.png'
import useStyles from './styles'

const Quality = () => {
    const classes = useStyles();
    return (
        <div className={classes.qualitySection}>
            <Link to="/">
                <img src={LogoMd} alt="circle" className={classes.circle} />
            </Link>
            <h3>Quality Assurance</h3>
            <p>JJ Global Translation prides itself on the ability to provide the highest quality of work at the best price possible. Our experienced team of project managers are constantly searching for better translators that work at better prices in order to offer the ultimate combination of quality and price for our clients.</p>
            <p className={classes.qualityText}>Well over a decade operating as a professional translation agency in the UK has allowed us to grow and refine our network of translation professionals at our clients disposal.</p>
            <hr />
        </div>
    )
}

export default Quality
