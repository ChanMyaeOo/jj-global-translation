import React from 'react'
import useStyles from './styles'
import Quote from '../../images/quote.webp'

const Showcase = () => {
    const classes = useStyles();
    return (
        <div className={classes.showcase}>
            <p>Located in London, UK, we are an established translation agency offering professional translation, interpreting, sworn translation, website translations and many other services to businesses and individuals in the UK.</p>

            <p className={classes.showcaseContent}>Since 2010, Translator UK have been using carefully-selected translators in the United Kingdom and world-wide to service our international client base providing on-time, accurate and professional translated documents, contracts, certificates and much more.</p>

            <img src={Quote} alt="quote" className={classes.quote} />
            <p>Our translations are always performed by highly qualified translators that always translate into their mother tongue. This is of paramount importance to ensure that the translation reads as though a native speaker wrote the document originally. We started our company offering only Spanish to English translation and English to Spanish translation services, but now we are pleased to offer translations in virtually every other language.</p>

            <h3>Primary Translation Services</h3>
            <p>Translator UK, and its network of professional translators offers a wide range of translation services. Below you will find a list of the most popular:</p>
        </div>
    )
}

export default Showcase
