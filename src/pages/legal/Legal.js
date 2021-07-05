import React from 'react'
import { Link } from 'react-router-dom'
import Review from '../../components/review/Review'
import YoutubeEmbed from '../../components/youtubeEmbed/YoutubeEmbed'
import useStyles from './styles'
import Quote from '../../images/quote.webp'
import BigCircle from '../../images/big-circle.webp'
import { legalData } from '../../data/legal'

const Legal = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.legal}>
                <YoutubeEmbed embedId="oTiovAM6wLI" />

                <div className={classes.legalWrap}>
                    <div className={classes.legalTitleWrap}>
                        <h2 className={classes.legalTitle}>Legal Translation Services</h2>
                        <h3 className={classes.legalSubTitle}>Details of legal and sworn translation services provided by JJ Global Translation</h3>
                    </div>
                    <p className={classes.legalText}>In the UK we do not have a sworn translation system in place like they do in countries such as France, Spain, Portugal etc. where there are governing bodies regulating sworn translators. Instead here in the UK we have three types of official translation, depending on the situation:</p>
                </div>

                <div className={classes.legalTypes}>
                    <Link to="#">Certified Translations</Link>
                    <Link to="#">Notarised Translations</Link>
                    <Link to="#">Legalised Translations</Link>
                </div>

                <Link to="/quote">
                    <img src={Quote} alt="quote" className={classes.legalQuote} />
                </Link>

                <p style={{ lineHeight: '1.5rem'}}>This is usually for translations going into English and the documents are for use in the UK or any other English-speaking country.</p>

                {
                    legalData.map(data => (
                        <div key={data.id}>
                            <Link to="/" className={classes.legalItemTitle}>{data.title}</Link>
                            <p className={classes.legalItemText}>{data.text}</p>
                        </div>
                    ))
                }

                <img src={BigCircle} alt="circle" className={classes.legalCircle} />
                <div className={classes.legalQuestion}>
                    <h3>What type of translation do you need?</h3>
                    <p>If you have been told by a government official, a court representative, or anyone from an official entity that you require a document to be translated, we recommend that you are very specific in asking what type of translation is required. A certified translation? A notarised translation? A sworn translation? A legalised translation? Once you have clarified the type of official translation required, we will be able to provide you with an accurate quotation for both the price and how long the translation will take.</p>
                    <h3>What type of documents require official translation?</h3>
                    <p>The following are just a few types of documents that often require certified, notarised, sworn or other official translation:</p>
                    <ul>
                        <li>Marriage Certificates</li>
                        <li>Death Certificates</li>
                        <li>Birth Certificates</li>
                        <li>Divorce Documents</li>
                        <li>FBI / Police Record Reports</li>
                        <li>Criminal Record Certificates</li>
                        <li>Credit History / Credit Check</li>
                        <li>Bank Account Statements</li>
                        <li>Property Purchase Contracts</li>
                        <li>Property Rental Contracts</li>
                        <li>Insurance policies</li>
                    </ul>
                </div>
            </div>
            <Review />
        </>
    )
}

export default Legal
