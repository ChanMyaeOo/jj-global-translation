import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'

const QuoteForm = () => {
    const classes = useStyles();
    return (
        <div className={classes.quoteFormWrap}>
            <div className={classes.quoteFormHeader}>
                <h2>Online Quotation Form</h2>
                <h3>Please use the below form to request a quotation for a translation, or translation-related project. Please be sure to include as much information as possible so we can revert quickly and precisely.</h3>
            </div>

            <form className={classes.quoteForm}>
                <input type="text" placeholder="Your name..." />
                <input type="email" placeholder="Your email address..." />
                <input type="text" placeholder="Your telephone number..." />
                <input type="text" placeholder="Language of your existing document..." />
                <input type="text" placeholder="Language(s) to be translated into..." />
                <input type="file" className={classes.quoteFile} />
                <p>Note that we can only handle uploading one file via this form. If you have more than one file to send us, either add them to a zip file and upload the zip file, or email us the documents instead to <strong>info@jjglobaltranslation.com</strong></p>
                <textarea placeholder="Additional information..."></textarea>
                <button>Request Quote</button>
            </form>

            <p>The confidentiality of your enquiry and any files to JJGlobal Translation will be held in the strictest of confidence in line with the latest policies pertaining to GDPR. Submitting information on this page is acknowledgement that you accept our terms and conditions and our privacy policy as stated at: <Link to="/" className={classes.termAndCond}>Terms &amp; Conditions</Link></p>
        </div>
    )
}

export default QuoteForm
