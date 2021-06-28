import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.webp'
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
        <div >
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
                    <Link to='/'><li>Languages</li></Link>
                    <Link to='/'><li>Services</li></Link>
                    <Link to='/'><li>Contact</li></Link>
                </ul>


                <button className={classes.headerBtn}>
                    Free Quotation
                </button>
            </div>
            <div className={classes.resMenu} id="res">
                <ul>
                    <li></li>
                    <Link to="/" onClick={closeMenu}><li>Home</li></Link>
                    <Link to="/translation" onClick={closeMenu}><li>Translation</li></Link>
                    <Link to="/prices" onClick={closeMenu}><li>Prices</li></Link>
                    <Link to="/legal-translation" onClick={closeMenu}><li>Legal Translation</li></Link>
                    <Link to="/" onClick={closeMenu}><li>Languages</li></Link>
                    <Link to="/" onClick={closeMenu}><li>Services</li></Link>
                    <Link to="/" onClick={closeMenu}><li>Contact</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header
