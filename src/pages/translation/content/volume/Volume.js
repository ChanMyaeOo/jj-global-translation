import React from 'react'
import { Link } from 'react-router-dom'
import Quote from '../../../../images/quote.webp'
import Circle from '../../../../images/big-circle.webp'
import SmallLogo from '../../../../images/small-logo.webp'
import useStyles from './styles'


const Volume = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.volume}>
                <h3 className={classes.volumeTitle}>Volume of Translation Possible</h3>
                <img src={Quote} alt="quote" className={classes.volumeQuote} />
                <p>This varies greatly depending on the language pair involved quite simply as this relates directly to supply and demand. As an example, we have previously translated over 200,000 words in one day from Spanish to English (although this is of course not recommended), yet we were unable to translate 50,000 words from Finnish to Japanese within the same day. Our company policy, in order to ensure the highest quality and consistency throughout all of the work, is to not give any one translator more than 2,500 words (varies for Asian languages) per day. If your project is small, it is always best to give us enough time to perform the work with this limit in mind. Otherwise, we utilise a series of translators, appointing one to act as “lead” (who coordinates with the others to develop a working glossary for continuity of terminology throughout the document(s) and then to proof-read the entire text from all translators). The lead translator will always be available for follow-up both with us and with the client direct for any Q&amp;A needed.</p>
            </div>

            <div className={classes.translationType}>
                <img src={Circle} alt="circle" className={classes.circle} />
                <h3>Types of Translations</h3>
                <p>To date we have not encountered a document or text that we were unable to translate. With our experience, we can call upon the resources of a wide range of individuals. From video production teams (typesetting captions in multi-language videos) to consulting with symbolists with the purpose of translating ancient etchings found by a client in their home in northern China.</p>
                <br/>
                <p>With that said, roughly 90% of the work that we do is for a small range of services. The most common are:</p>
                <br/>
                <ul>
                    <li><Link to="/">Website Translations</Link></li>
                    <li><Link to="/">Certified Translations</Link></li>
                    <li><Link to="/">Legal Translations</Link></li>
                    <li><Link to="/">Technical (or Specialised) Translations</Link></li>
                    <li><Link to="/">Medical and Scientific Translations</Link></li>
                </ul>
            </div>

            <div className={classes.translationTech}>
                <h3>Translation Technologies Used</h3>
                <p>In today's competitive marketplace many other agencies operating in the United Kingdom (and around the world for that matter) are doing all that they can do in a short period of time to cut costs and bring the overall price down. Unfortunately, this means sacrificing both the quality and the ability to meet deadlines for their clients. The following Q&A should hopefully explain how we work.</p>
            </div>

            <div className={classes.googleTranslate}>
                <h3>Do you use Google Translate?</h3>
                <p>No. We most certainly do not. Automated translation software of any kind is not used. These are very handy tools for people to use to get a general idea of text in a foreign language, but the technology is simply not there yet to use Google Translate (or any similar services) in any way, shape or form as a translation tool by professionals.</p>

                <h3>I have a small document in English that I need translated into another language; who will be doing that for me?</h3>
                <p>In this instance, the individual that will be doing the work and/or proofreading it prior to sending to the client will be all of the following:</p>
                <br />
                <ul>
                    <li>University educated (with a degree) in translation from English to the other language</li>
                    <li>A native speaker of the other language (our translators only ever translate into the mother tongue)</li>
                    <li>An individual that has been thoroughly vetted by the HR team of Translator UK</li>
                    <li>An individual that has proven expertise in the subject matter of the document</li>
                </ul>

                <h3>Do your translators use any software at all?</h3>
                <p>Yes. Our translators and proof-readers utilise a wide range of software during the course of their everyday work. There are only two types of software used that have anything to do with the actual translation themselves. They are:</p>

                <h3>Translation Memory Software (such as Trados)</h3>
                <p>These tools are very useful, and work in a similar manner to Google Translate, only it is the translator's own translations that are “remembered” by the software. Once a phrase or sentence has been translated once, the next time that same phrase or sentence appears in a project they work on, they are suggested to use the same translation. In large translation projects that include many repetitive words / phrases (e.g. compilations of financial statements, user manuals repeating the same text over and over with model number changes, etc.. and utilising translation memory software, we can quote a far lower price for repetitions then for new words.</p>

                <h3>OCR Applications</h3>
                <p>This refers to Object Character Recognition and is an extremely useful tool for documents that have been scanned and/or any type of document that the client does not have the soft copy of. A document can be processed by the OCR application and essentially convert the document to text-editable format (such as Microsoft Word). With large archives of documents scanning them alone is insufficient for many companies as they require the content, not just a picture of the document which is in fact, what a scan is. Our translators use many different OCR applications. For your reference one of the more popular with translators is Abby PDF converter. What if the text I need translated is very specialised (e.g. a paper on thermonuclear dynamics)? Do you have translators in-house for everything? Employing translators to cover every subject matter would be impossible. Our database has thousands of translators within it, and if we do not have a translator in our database for your specific needs, we will use our network of additional resources and agency contacts throughout the world to find them for you. The managing director of Translator UK had this to say about a particular translation for a large European organisation in 2020: “I consider myself to be a fairly well-versed individual with a stronger command of the English language than most; however after reading and re-reading the 2,500 word document over 10 times I was not able to fully understand more than 2 sentences and had I not known the title, I could not have even hazarded a guess at the true meaning of the text”. Translator UK successfully translated that same text into 27 different languages all to the highest standard.</p>

                <h3>The document I need to be translated is highly confidential. Can I trust you?</h3>
                <p>Yes. We have previously translated many such documents for a wide range of organisations, government bodies, NGOs and corporate clients. Discretion and confidentiality are standard practice at Translator UK and upon request, we have an NDA that we can send, and/or our management team can be made available to peruse and sign off on your own NDA should you wish. We are fully GDPR compliant and documentation regarding this compliance is available upon request.</p>

                <h3>I want to know more about the translation services you offer in the UK.</h3>
                <p>Great! We can't wait to hear from you! Call or email us now, and one of our project managers will be glad to answer your questions.</p>

                <Link to="/"><img src={SmallLogo} alt="logo" className={classes.volumeLogo} /></Link>
            </div>
        </>
    )
}

export default Volume
