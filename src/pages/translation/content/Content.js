import React from "react";
import { Link } from 'react-router-dom'
import useStyles from "./styles";
import Volume from './volume/Volume';

const Content = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <p>
                For more than a decade now, Translator UK has been providing a
                wide range of translation services to clients in London, in the
                United Kingdom and throughout the world. Below you will find all
                you need to know about the services we offer.
            </p>
            <h3 className={classes.selectionTitle}>Selection Process</h3>
            <div className={classes.selectionContent}>
                <div className={classes.selectionLeft}>
                    <p>
                        As a professional translation agency, Translator UK
                        receives hundreds of CVs from qualified translators
                        every single day. It is our responsibility and our great
                        pleasure to systematically go through these and
                        hand-pick the most qualified, most professional and in
                        short, best translators to become part of our network.
                    </p>
                    <br/>
                    <p>
                        Once selected we take this one step further and follow
                        up with a set of sample translations for them to perform
                        for us to ensure they are as good as they say they are
                        and, finally, the best of the best are then added to our
                        database along with their specific specialties (e.g.
                        legal, technical, medical, scientific, technological,
                        etc.) are noted. When a new project for one of our
                        clients comes in, we then offer the new translator the
                        opportunity to perform the job, and ask them for their
                        best price possible. Once the job is complete, we
                        utilise one of our leading proof-readers to verify their
                        work, and inform the translator themselves (and us) of
                        any discrepancies and/or amendments that needed to be
                        made. If there is a large amount of these, the
                        translator is immediately dropped from our database and
                        a suitable replacement is recruited.
                    </p>
                </div>
                <div className={classes.selectionRight}>
                    <h3>Most Popular Language Pairs as of June 2021</h3>
                    <div className={classes.selectionItemWrap}>
                        <Link to={`/translation/1`} className={classes.selectionItem}>English to Spanish Translation</Link>
                        <Link to="/" className={classes.selectionItem}>Spanish to English Translation</Link>
                    </div>

                    <div className={classes.selectionItemWrap}>
                        <Link to="/" className={classes.selectionItem}>English to French Translation</Link>
                        <Link to="/" className={classes.selectionItem}>French to English Translation</Link>
                    </div>

                    <div className={classes.selectionItemWrap}>
                        <Link to="/" className={classes.selectionItem}>English to Russian Translation</Link>
                        <Link to="/" className={classes.selectionItem}>Russian to English Translation</Link>
                    </div>

                    <div className={classes.selectionItemWrap}>
                        <Link to="/" className={classes.selectionItem}>English to Arabic Translation</Link>
                        <Link to="/" className={classes.selectionItem}>Arabic to English Translation</Link>
                    </div>
                </div>
            </div>

            <Volume />
        </div>
    );
};

export default Content;
