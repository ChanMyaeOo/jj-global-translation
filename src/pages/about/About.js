import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import YoutubeEmbed from '../../components/youtubeEmbed/YoutubeEmbed'
import Img1 from '../../images/loc1.jpg';
import Img2 from '../../images/loc2.jpg';
import Img3 from '../../images/loc3.jpg';
import Img4 from '../../images/loc4.jpg';
import Img5 from '../../images/loc5.jpg';
import Img6 from '../../images/loc6.jpg';
import Img7 from '../../images/loc7.jpg';
import Img8 from '../../images/loc8.jpg';
import BigCircle from '../../images/big-circle.webp';
import LinkedIn from '../../images/linkedin.svg'
import useStyles from './styles'

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.about}>
            <YoutubeEmbed embedId="brcqNu1nsm4"/>
            <div className={classes.aboutWrap}>
                <h1 className={classes.aboutTitle}>Translator UK Agency</h1>
                <h2 className={classes.aboutSubTitle}>Corporate Information and introductory video of Translator UK: Translation Agency</h2>
                <p className={classes.aboutText}>Since 2010, Translator UK has been growing rapidly internationally and has provided professional translation services and interpreting to a wide range of individual and corporate clients throughout the world. The head office of Translator UK is based in London, and they have a series of university-trained professional translators throughout the world to handle their client’s ever-increasing demands.</p>
                <div className={classes.aboutNetwork}>
                    <h3>Translator Network</h3>
                    <p>At the core of Translator UK is our ever-growing network of university-level translators. As of June 2021, this network is made up of 476 translators.</p>
                    <br />
                    <p>These translators have been hand-picked following a rigorous vetting process that meet the following minimum criteria:</p>
                    <br />
                    <ul>
                        <li>University educated in translation</li>
                        <li>Minimum 2 years' experience as a translator in their language pair</li>
                        <li>Proven track record of excellence</li>
                    </ul>
                    <p><em>If you are a translator that would like to work with Translator UK, please contact our HR department via: <Link to="/">recruitment.</Link></em></p>
                </div>

                <div className={classes.aboutLocation}>
                    <h3>Other Locations Serviced by Translator UK Network</h3>
                    <div className={classes.aboutLocWrap}>
                        <Grid container>
                            <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                                <Link to="/"><img src={Img1}  alt="logo" className={classes.locImage}/></Link>
                            </Grid>
                            <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                                <Link to="/"><img src={Img2}  alt="logo" className={classes.locImage}/></Link>
                            </Grid>
                            <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                                <Link to="/"><img src={Img3}  alt="logo" className={classes.locImage}/></Link>
                            </Grid>
                            <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                                <Link to="/"><img src={Img4}  alt="logo" className={classes.locImage}/></Link>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                                <Link to="/"><img src={Img5}  alt="logo" className={classes.locImage}/></Link>
                            </Grid>
                            <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                                <Link to="/"><img src={Img6}  alt="logo" className={classes.locImage}/></Link>
                            </Grid>
                            <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                                <Link to="/"><img src={Img7}  alt="logo" className={classes.locImage}/></Link>
                            </Grid>
                            <Grid item xl={3} lg={3} md={3} sm={3} xs={6}>
                                <Link to="/"><img src={Img8}  alt="logo" className={classes.locImage}/></Link>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={classes.aboutMoreInfo}>
                        <img src={BigCircle} alt="circle" className={classes.bigCircle} />
                        <h3>More information about Translator UK</h3>
                        <p>Translator UK is a professional translation agency in the United Kingdom. There are many local divisions, each representing their own location and offering localised translation and interpreting services for their community.</p>
                        <br />
                        <p>Translator UK is wholly owned and operated by London Translation Services Limited, UK company registration #10800997. Our head office is located at St. Vincent House, 30 Orange Street, London, WC2H 7HF, United Kingdom.</p>
                        <br />
                        <p>Translator UK has been actively using LinkedIn as a platform of choice to communicate with clients and allow project managers to communicate directly with the translation services clients. If you would like to "Follow" Translator UK and keep up to date with current news, job offers and special offers on translation services, please see:</p>
                        <img src={LinkedIn} alt="linkedin" className={classes.aboutLinkedin} />
                        <h3>Translator UK on LinkedIn</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
