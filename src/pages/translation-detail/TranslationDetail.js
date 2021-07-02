import React from "react";
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
// import { useParams } from "react-router-dom";
// import { translationsData } from "../../data/translations";
import useStyles from "./styles";
import DocumentImg from '../../images/big-document.webp'
import Quote from '../../images/quote.webp'
import Review from '../../components/review/Review'

const TranslationDetail = () => {
    const classes = useStyles();
    // const { translationId } = useParams();
    // const translation = translationsData.find(
    //     (data) => data.id === translationId
    // );
    return (
        <div className={classes.transDetailWrap}>
            <img
                src={DocumentImg}
                alt="document"
                className={classes.documentImg}
            />
            <div className={classes.transDetail}>
                <h2>English to Spanish Translation Services</h2>
                <h3>
                    English to Spanish translation services offered by Spanish
                    translators based in the United Kingdom via Translator UK.
                </h3>
                <img src={Quote} alt="quote" className={classes.quote} />
                <p>
                    Translator UK, as a leading English to Spanish translation
                    services provider in the United Kingdom offers an
                    ever-growing range of language-related services in both
                    languages. Below you will find a summary of our core English
                    to Spanish translation services.
                </p>
                <br />
                <p>
                    We also provide a free quotation for all English to Spanish
                    translations; therefore, you can compare the costs of our
                    services against our competitors quickly and without
                    commitment.
                </p>
            </div>
            <hr />

            <div className={classes.coreSection}>
                <h3>Core English to Spanish translation services offered by Translator UK</h3>
                <p>Our team of experienced English to Spanish translators will work with you to deliver whatever type of translation you require. Should you require any other type of translation service not listed below from English to Spanish, please do not hesitate to contact us.</p>
                <br />
            </div>

            <Grid container className={classes.detailCardContainer}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12} className={classes.servCard}>
                    <Link to="/" className={classes.servCardLink}>
                        <h3>English to Spanish document translation</h3>
                        <p>There are a wide range of documents that can be translated from English to Spanish for different purposes. In our many years of operation, Translator UK has never come across any English documents that we could not translate into Spanish for our clients. Just a few of these documents are listed here:</p>
                        <p></p>
                        <br />
                        <p><em>- Learn more about translating documents into Spanish -</em></p>
                    </Link>
                </Grid>

                 <Grid item xl={4} lg={4} md={4} sm={4} xs={12} className={classes.servCard}>
                     <Link to="/" className={classes.servCardLink}>
                        <h3>English to Spanish document translation</h3>
                        <p>There are a wide range of documents that can be translated from English to Spanish for different purposes. In our many years of operation, Translator UK has never come across any English documents that we could not translate into Spanish for our clients. Just a few of these documents are listed here:</p>
                        <p></p>
                        <br />
                        <p><em>- Learn more about translating documents into Spanish -</em></p>
                    </Link>
                </Grid>

                <Grid item xl={4} lg={4} md={4} sm={4} xs={12} className={classes.servCard}>
                     <Link to="/" className={classes.servCardLink}>
                        <h3 className={classes.cardTitle}>English to Spanish document translation</h3>
                        <p>There are a wide range of documents that can be translated from English to Spanish for different purposes. In our many years of operation, Translator UK has never come across any English documents that we could not translate into Spanish for our clients. Just a few of these documents are listed here:</p>
                        <p></p>
                        <br />
                        <p><em>- Learn more about translating documents into Spanish -</em></p>
                    </Link>
                </Grid>

                <Grid item xl={4} lg={4} md={4} sm={4} xs={12} className={classes.servCard}>
                     <Link to="/" className={classes.servCardLink}>
                        <h3>English to Spanish document translation</h3>
                        <p>There are a wide range of documents that can be translated from English to Spanish for different purposes. In our many years of operation, Translator UK has never come across any English documents that we could not translate into Spanish for our clients. Just a few of these documents are listed here:</p>
                        <p></p>
                        <br />
                        <p><em>- Learn more about translating documents into Spanish -</em></p>
                    </Link>
                </Grid>

                <Grid item xl={4} lg={4} md={4} sm={4} xs={12} className={classes.servCard}>
                     <Link to="/" className={classes.servCardLink}>
                        <h3>English to Spanish document translation</h3>
                        <p>There are a wide range of documents that can be translated from English to Spanish for different purposes. In our many years of operation, Translator UK has never come across any English documents that we could not translate into Spanish for our clients. Just a few of these documents are listed here:</p>
                        <p></p>
                        <br />
                        <p><em>- Learn more about translating documents into Spanish -</em></p>
                    </Link>
                </Grid>

                <Grid item xl={4} lg={4} md={4} sm={4} xs={12} className={classes.servCard}>
                     <Link to="/" className={classes.servCardLink}>
                        <h3>English to Spanish document translation</h3>
                        <p>There are a wide range of documents that can be translated from English to Spanish for different purposes. In our many years of operation, Translator UK has never come across any English documents that we could not translate into Spanish for our clients. Just a few of these documents are listed here:</p>
                        <p></p>
                        <br />
                        <p><em>- Learn more about translating documents into Spanish -</em></p>
                    </Link>
                </Grid>

            </Grid>
            <hr />  
            <Review />
        </div>
    );
};

export default TranslationDetail;
