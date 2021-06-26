import React from 'react'
import Button from '@material-ui/core/Button';
import Logo from '../../images/logo.webp'
import useStyles from './styles'


const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.header}>
            <div>
                <img src={Logo} />
            </div>


            <ul className={classes.nav}>
                <li>Home</li>
                <li>Translation</li>
                <li>Prices</li>
                <li>Legal Translation</li>
                <li>Languages</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>


            <button className={classes.headerBtn}>
                Free Quotation
            </button>
        </div>
    )
}

export default Header
