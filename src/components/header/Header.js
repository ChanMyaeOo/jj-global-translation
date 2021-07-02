import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import Logo from '../../images/jj-logo.png'
import useStyles from './styles'


const Header = () => {
    const classes = useStyles()

    const handleMenu = () => {
        document.querySelector('#res').style.display = 'block'
    }

    const closeMenu = () => {
        document.querySelector('#res').style.display = 'none'
    }
    return (
        <div>
            <div className={classes.header}>
                <Link to="/" >
                    <img src={Logo} alt="Logo" className={classes.headerLogo} />
                </Link>

                <MenuIcon className={classes.menu} onClick={handleMenu} />
                <ul className={classes.nav}>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/translation'><li>Translation</li></Link>
                    <Link to='/prices'><li>Prices</li></Link>
                    <Link to='/legal-translation'><li>Legal Translation</li></Link>
                    <Link to='/languages'><li>Languages</li></Link>
                    <Link to='/services'><li>Services</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                </ul>


                <Link to="/quote" className={classes.headerBtn}>
                    Free Quotation
                </Link>
            </div>
            <div className={classes.resMenu} id="res">
                <ul>
                    <li></li>
                    <Link to="/" onClick={closeMenu}><li>Home</li></Link>
                    <Link to="/translation" onClick={closeMenu}><li>Translation</li></Link>
                    <Link to="/prices" onClick={closeMenu}><li>Prices</li></Link>
                    <Link to="/legal-translation" onClick={closeMenu}><li>Legal Translation</li></Link>
                    <Link to="/languages" onClick={closeMenu}><li>Languages</li></Link>
                    <Link to="/services" onClick={closeMenu}><li>Services</li></Link>
                    <Link to="/contact" onClick={closeMenu} ><li className={classes.lastList}>Contact</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header
