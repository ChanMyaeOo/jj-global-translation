import React from 'react'
import { useParams } from 'react-router-dom'
// import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { languagesData } from '../../data/languages'
import useStyles from './styles'
import DocumentImg from '../../images/big-document.webp'
import Quote from '../../images/quote.webp'
import SmallLogo from '../../images/small-logo.webp'

const LanguageDetail = () => {
    const classes = useStyles();
    const { languageId } = useParams();
    const language = languagesData.find(data => data.id === languageId)
    return (
        <div className={classes.languageDetailWrap}>
            <img
                src={DocumentImg}
                alt="document"
                className={classes.documentImg}
            />
            <div className={classes.languageDetail}>
                <h2>{language.text1}</h2>
                <h3>
                    {language.text2}
                </h3>
                <img src={Quote} alt="quote" className={classes.quote} />
                <p>
                    {language.text3}
                </p>
                <br />
                <p>
                   {language.text4}
                </p>
                <br />
                <p>{language.text5}</p>
            </div>
            <hr />

            {/* 
            <div className={classes.comLanguageTrans}>
                <h3>Common Arabic Translation Services offered by Translator UK</h3>
                <p>Our team of experienced Arabic translators will work with you to deliver whatever type of translation you require.</p>
                <br />
                <p>Below you will find a list of the most common services our Arabic translators offer in the United Kingdom and throughout the world; Should you require any other type of translation service typically provided by an Arabic translation agency in the United Kingdom, please do not hesitate to contact us.</p>
                <br />
                <p className={classes.officialTitle}>Official Arabic Translations:</p>
                <Grid container className={classes.officialItem}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <Link to="/" className={classes.offItem}>Arabic Certified Translations</Link>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <Link to="/" className={classes.offItem}>Arabic Legal Translations</Link>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <Link to="/" className={classes.offItem}>Arabic Certificate Translations</Link>
                    </Grid>
                </Grid>
                <p className={classes.standardTitle}>Standard Arabic Translations:</p>
                <Grid container className={classes.standardItem}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <Link to="/" className={classes.offItem}>Arabic User Manual Translations</Link>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <Link to="/" className={classes.offItem}>Arabic Document Translations</Link>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <Link to="/" className={classes.offItem}>Arabic Website Translations</Link>
                    </Grid>
                </Grid>
                <hr />
            </div>
            */}

            <div className={classes.languageReview}>
                <h3>{language.langName} Translation Agency Reviews</h3>
                <div className={classes.reviewHeader}>
                    <Link to="/" className={classes.languageStar}>★ ★ ★ ★ ☆</Link>
                    <p>{language.text6} <Link to="/" className={classes.reviewTranslator}>Review Translator UK.</Link></p>

                </div>
            </div>

            <div className={classes.rightBox}>
                <h3>{language.langName} Translators Qualifications</h3>
                <p>All of our {language.langName} translators have been thoroughly vetted and have at a bare minimum the following qualifications:</p>
                <ul>
                    <li>University educated in translation</li>
                    <li>Native {language.langName} speakers</li>
                    <li>Experienced with the subject matter of your {language.langName} text</li>
                    <li>Accredited by one or more translation institutes for their previous {language.langName} translation experience</li>
                    <li>References from other {language.langName} translation agencies</li>
                </ul>
            </div>

            <div className={classes.leftBox}>
                <h3>{language.langName} Translator Jobs</h3>
                <p>If you are a qualified {language.langName} translator that has a university degree in translation and are not yet registered with us, we would be delighted to hear from you. Simply email your CV and references to translatorcv@translatoruk.co.uk and our HR department will be in touch with you shortly thereafter.</p>
                <Link to="/" className={classes.envelop}>✉</Link>
            </div>

            {/* 
            <hr />
            <div className={classes.moreAboutLang}>
                <h3>More about the Arabic Language</h3>
                <h4>History of Arabic</h4>
                <p>Records dating back to the 8th century document earliest forms of Arabic, referred to commonly as Ancient North Arabian, or Proto-Arabic. Since then, the language has undergone many transformations and changes and the language is intrinsically tied to Muslim beliefs (many believe that Arabic was the language revealed by God for His people to communicate).</p>
                <h4>Native Speakers</h4>
                <p>Internationally in present-day, there are over 290 million native speakers of Arabic (or some form or deviation of Arabic), and it is the official language in many countries.</p>
                <h4>Arabic Writing</h4>
                <p>Arabic is one of the few languages that are written from right-to-left as opposed to most languages (from left-to-right), and is referred to as Arabic Script. Arabic script is comprised of 28 letters.</p>
                <h4>Arabic References</h4>
                <p>Learn more about Arabic history and the people who are speak Arabic today by reading the following information on Wikipedia.org:</p>
                <ul>
                    <li>
                        <Link to="/">Arabic Language on Wikipedia</Link>
                    </li>
                    <li><Link to="/">Arabic Alphabet on Wikipedia</Link></li>
                </ul>
                <h4>Arabic Translation Services</h4>
                <p>Our most common Arabic translation services and details of the translators that perform the translations can be found here:</p>
                <ul>
                    <li>
                        <Link to="/">English to Arabic translation services</Link>
                    </li>
                    <li>
                        <Link to="/">Arabic to English translation services</Link>
                    </li>
                    <li>
                        <Link to="/">English to Arabic translators</Link>
                    </li>
                    <li>
                        <Link to="/">Arabic to English translators</Link>
                    </li>
                </ul>
            </div>
            */}
            <div className={classes.smallLogoWrap}>
                <Link to="/">
                    <img src={SmallLogo} alt="logo" className={classes.smallLogo} />
                </Link>
            </div>
        </div>
    )
}

export default LanguageDetail
