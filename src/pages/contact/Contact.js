import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import Quote from '../../images/quote.webp'

const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.contact}>
            <h2>Contact Translator UK Translation Agency</h2>
            <div className={classes.contactTitleWrap}>
                <h3>Contact details and form for Translator UK Translation Agency <Link to="/" className={classes.contactRes}><em>Contact Human Resources</em></Link></h3>
                <Link to="/" className={classes.contactHR}><em>Contact Human Resources</em></Link>
            </div>

            <div className={classes.contactAddress}>
                <Link to="/" className={classes.contactEmail}>
                    <div>info@translatoruk.co.uk</div>
                    <p>✉</p>
                </Link>

                <Link to="/" className={classes.contactPhone}>
                    <div>+44 207 993 4894</div>
                    <p>✆</p>
                </Link>
            </div>
            <hr />

            <div className={classes.contactForm}>
                <h3>Contact Form</h3>
                <Link to="/quote">
                    <img src={Quote} alt="quote" className={classes.contactQuote} />
                </Link>
                <p>Please use the below form to contact us regarding any of our translation services, if you would like to speak directly with a project manager, our accounts department or public relations. If you are in search of a translation quotation, please select "Get your free online quote today":</p>

                <form className={classes.contactFormWrap}>
                    <input type="text" placeholder="Your name..." />
                    <input type="email" placeholder="Your email address..." />
                    <input type="text" placeholder="Your telephone number..." />
                    <textarea placeholder="Your Message...">

                    </textarea>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
