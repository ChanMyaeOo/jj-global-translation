import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as GoogleMaps } from "../../images/big-maps.svg";
import { ReactComponent as Yelp } from "../../images/big-yelp.svg";
import { ReactComponent as TrustpilotSvg } from "../../images/big-trustpilot.svg";
import Trustpilot from '../../images/trustpilot.png'

const ReviewPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.reviewPageWrap}>
            <div className={classes.reviewPage}>
                <h2>Review Translator UK Agency</h2>
                <h3>
                    Details on how to submit a review for translation or related
                    services provided by Translator UK: Translation Agency
                </h3>
                <p>
                    We rely heavily on the recommendations we receive from our
                    clients as most internet-based businesses do, and your
                    honest and candid opinion of our services is not only
                    greatly appreciated, but will help us to ensure that
                    Translator UK continues to grow and service our clients to
                    the highest standard on an ongoing basis.
                </p>
                <br />
                <p>We thank you in advance for your time.</p>
                <br/>
                <div className={classes.socialWrap}>
                    <div className={classes.socials}>
                        <div className={classes.gmapsWrap}>
                            <Link to="/">
                                <GoogleMaps className={classes.gmaps} />
                            </Link>
                            <p>Review Translator UK on Google</p>
                        </div>
                        <div className={classes.yelpWrap}>
                            <Link to="/">
                                <Yelp className={classes.yelp} />
                            </Link>
                            <p>Review Translator UK on Yelp</p>
                        </div>
                    </div>

                    <div className={classes.socials}>
                        <div className={classes.facebookWrap}>
                            <Link to="/">
                                <Facebook className={classes.facebook} />
                            </Link>
                            <p>Review Translator UK on Facebook</p>
                        </div>
                        <div className={classes.trustpilotWrap}>
                            <Link to="/">
                                <TrustpilotSvg className={classes.trustpilotSvg}/>
                                <img src={Trustpilot} alt="trustpilot" className={classes.trustpilot}/>
                            </Link>
                            <p>Review Translator UK on Trust Pilot</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;
