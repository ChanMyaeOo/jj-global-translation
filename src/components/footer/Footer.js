import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Linkedin } from '../../images/linkedin.svg'
import { ReactComponent as Facebook } from '../../images/facebook.svg'
import { ReactComponent as GoogleMaps } from '../../images/google-maps.svg'
import { ReactComponent as Twitter } from '../../images/twitter.svg'
import { ReactComponent as Youtube } from '../../images/youtube.svg'
import Trustpilot from '../../images/trustpilot.png'
import useStyles from './styles'

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <div className={classes.copyright}>
                <div className={classes.copyrightText}>© Copyright <strong>Translator UK</strong> - 2021</div>
                <div className={classes.copyrightAddress}>London Translation Services Limited</div>
                <div className={classes.copyrightAddress}>St. Vincent House, 30 Orange Street London, WC2H 7HF</div>
                <div className={classes.copyrightAddress}>+44 207 993 4894</div>
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
                    <a href="https://www.linkedin.com/in/jj-global-translation-a63836215/" target="_blank"><Linkedin className={classes.footerIcon} /></a>
                    <a href="https://www.youtube.com/channel/UClv4tsKCkVrgGL4Ce8Kg7kw" target="_blank"><Youtube className={classes.footerIcon} /></a>
                    <a href="https://www.facebook.com/JJ-Global-Translation-112278091111654" target="_blank"><Facebook className={classes.footerIcon} /></a>

                </div>
            </div>
        </div>
    )
}

export default Footer
