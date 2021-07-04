import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Linkedin } from '../../images/linkedin.svg'
import { ReactComponent as Facebook } from '../../images/facebook.svg'
import { ReactComponent as Youtube } from '../../images/youtube.svg'
import useStyles from './styles'

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <div className={classes.copyright}>
                <div className={classes.copyrightText}>© Copyright <strong>JJGlobaltranslation Limited</strong></div>
                <div className={classes.copyrightAddress}>368 Caledonian Rd London N1 1DU</div>
                <div className={classes.copyrightAddress}>info@jjglobaltranslation.com</div>
                <div className={classes.copyrightAddress}>+442038387246</div>
            </div>

            <div className={classes.footerRight}>
                <ul className={classes.footerLinks}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/translation">Translation</Link></li>
                    <li><Link to="/pricces">Prices</Link></li>
                    <li><Link to="/legal-translation">Legal Translation</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/languages">Languages</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Sitemap</Link></li>
                    <li><Link to="/">Terms</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <div className={classes.footerIcons}>
                    <a href="https://www.linkedin.com/in/jj-global-translation-a63836215/" target="_blank" rel="noreferrer"><Linkedin className={classes.footerIcon} /></a>
                    <a href="https://www.youtube.com/channel/UClv4tsKCkVrgGL4Ce8Kg7kw" target="_blank" rel="noreferrer"><Youtube className={classes.footerIcon} /></a>
                    <a href="https://www.facebook.com/JJ-Global-Translation-112278091111654" target="_blank" rel="noreferrer"><Facebook className={classes.footerIcon} /></a>

                </div>
            </div>
        </div>
    )
}

export default Footer
