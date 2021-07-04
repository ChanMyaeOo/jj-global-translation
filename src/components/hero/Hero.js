import React from "react";
import useStyles from "./styles";
import CompanyVideo from '../../videos/jj-video.mp4'

const Hero = () => {
    const classes = useStyles();
    return (
        <div className={classes.heroWrap}>

            <div className={classes.compVideoWrap}>
                <video autoPlay="autoPlay" muted loop className={classes.compVideo}>
                    <source
                        src={CompanyVideo}
                        type="video/mp4"
                    />
                </video>
            </div>

            <div className={classes.rightHalf}>
                <div className={classes.rightContent}>
                    {/* <h1 className={classes.heroTitle}>JJ Global Translation</h1>
                    <h2 className={classes.heroSubTitle}>JJ Global is an established translation agency with professional translators throughout the United Kingdom</h2>
                    <Link to="/" className={classes.learnBtn}>Learn More</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
