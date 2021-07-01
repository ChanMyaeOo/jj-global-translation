import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { servicesData } from "../../data/services";
import DocumentImg from "../../images/big-document.webp";
import Quote from "../../images/quote.webp";
import BigCircle from '../../images/big-circle.webp';
import Review from '../../components/review/Review'
import useStyles from "./styles";

const ServiceDetial = () => {
    const classes = useStyles();
    const { serviceId } = useParams();
    const service = servicesData.find((data) => data.id === serviceId);
    return (
        <div className={classes.serviceDetailWrap}>
            <img
                src={DocumentImg}
                alt="document"
                className={classes.documentImg}
            />
            <div className={classes.serviceDetail}>
                <h2>Document Translation Services in the UK</h2>
                <h3>
                    Details of the document translation services provided by
                    professional document translators based in the United
                    Kingdom via Translator UK.
                </h3>
                <img src={Quote} alt="quote" className={classes.quote} />
                <p>
                    In search of professional document translation services? You
                    have come to the right place. Translator UK has been working
                    with some of the United Kingdom's best document translators
                    since 2010 in a wide range of languages to and from English.
                </p>
                <br />
                <p>
                    We also provide a free quotation for all of our document
                    translations; therefore, you can compare the costs of our
                    services against our competitors quickly and without
                    commitment.
                </p>
            </div>
            <hr />

            <div className={classes.moreAbout}>
                <h3>More about document translation services</h3>
                <p>Document translation is the oldest form of translation dating back centuries. A significant amount of changes have taken place over this time in the methodologies and accuracy of the translations provided. At Translator UK all of the document translations provided are of the highest standard, performed by university-educated translators who are native speakers of the language the document is to be translated to.</p>
                <br />
                <p>Thankfully, in today's day and age, there is no need to actually send your original document to our offices via post, or deliver them in person, instead, a high quality scan of your document, or even a picture, is acceptable for Translator UK to review and provide a free quotation for translation services on.</p>
                <br />
                <p>If you already have your document in a text-ready format (such as Microsoft Word, Microsoft Excel, PowerPoint, or just text within an email, sending this 'electronic document' through via email, or via our upload form on our Free Quotation page will allow our project managers to quickly review your document(s) and respond via email with a detailed quotation of both price and timeline.</p>
            </div>

            <div className={classes.commonServices}>
                
                <h3>Common document translation service languages</h3>
                <img src={BigCircle} alt="circle" className={classes.bigCircle} />
                <p>On a monthly basis, Translator UK handles many document translations from hundreds of different languages, our most popular languages with the document translation services are detailed below:</p>
                <br />
                <Grid container className={classes.comServiceGrid}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Link to="/" className={classes.comServiceItem}>French Document Translations</Link>
                    </Grid>
                     <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Link to="/" className={classes.comServiceItem}>Arabic Document Translations</Link>
                    </Grid>
                     <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Link to="/" className={classes.comServiceItem}>German Document Translations</Link>
                    </Grid>
                     <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Link to="/" className={classes.comServiceItem}>Dutch Document Translations</Link>
                    </Grid>
                     <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Link to="/" className={classes.comServiceItem}>Italian Document Translations</Link>
                    </Grid>
                     <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Link to="/" className={classes.comServiceItem}>Chinese Document Translations</Link>
                    </Grid>
                </Grid>
                <hr />
            </div>

            <div className={classes.otherTransServices}>
                <h3>Other translation services related to document translation provided by Translator UK</h3>
                <p>Other common services are listed here below for your convenience:</p>
                <br />
                <Grid container className={classes.otherServiceGrid}>
                    <Grid item xl={4} lg={4} md={4} xs={12} className={classes.item}>
                        <Link to="/" className={classes.itemTitle}>Certified Translations</Link>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} xs={12} className={classes.item}>
                        <Link to="/" className={classes.itemTitle}>Website Translations</Link>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} xs={12} className={classes.item}>
                        <Link to="/" className={classes.itemTitle}>Sworn Translations</Link>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} xs={12} className={classes.item}>
                        <Link to="/" className={classes.itemTitle}>Legal Translations</Link>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} xs={12} className={classes.item}>
                        <Link to="/" className={classes.itemTitle}>Certificate Translations</Link>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} xs={12} className={classes.item}>
                        <Link to="/" className={classes.itemTitle}>Standard Translations</Link>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} xs={12} className={classes.item}>
                        <Link to="/" className={classes.itemTitle}>Mobile App Translations</Link>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} xs={12} className={classes.item}>
                        <Link to="/" className={classes.itemTitle}>Technical Translations</Link>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} xs={12} className={classes.item}>
                        <Link to="/" className={classes.itemTitle}>Medical Translations</Link>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} xs={12} className={classes.item}>
                        <Link to="/" className={classes.itemTitle}>User Manual Translations</Link>
                    </Grid>
                </Grid>
            </div>
            <hr />
            <Review />
        </div>
    );
};

export default ServiceDetial;
