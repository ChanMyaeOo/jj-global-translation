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
                    <li><Link to="/">Translation</Link></li>
                    <li><Link to="/">Prices</Link></li>
                    <li><Link to="/">Legal Translation</Link></li>
                    <li><Link to="/">Services</Link></li>
                    <li><Link to="/">Languages</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Sitemap</Link></li>
                    <li><Link to="/">Terms</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>

                <div className={classes.footerIcons}>
                    <Link to="/"><Linkedin className={classes.footerIcon} /></Link>
                    <Link to="/"><Twitter className={classes.footerIcon} /></Link>
                    <Link to="/"><Facebook className={classes.footerIcon} /></Link>
                    <Link to="/"><Youtube className={classes.footerIcon} /></Link>
                    <Link to="/"><img src={Trustpilot} className={classes.footerIcon} alt="trustpilot"/></Link>
                    <Link to="/"><GoogleMaps className={classes.footerIcon} /></Link>

                </div>
            </div>
        </div>
    )
}

export default Footer
