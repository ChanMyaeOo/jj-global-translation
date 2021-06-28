import React from 'react'
import Review from '../../components/review/Review'
import YoutubeEmbed from '../../components/youtubeEmbed/YoutubeEmbed'
import useStyles from './styles'

const Legal = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.legal}>
                <YoutubeEmbed embedId="H7pvdsbVR3Y" />

                <div className={classes.legalWrap}>
                    <div className={classes.legalTitleWrap}>
                        <h2 className={classes.legalTitle}>Legal Translation Services</h2>
                        <h3 className={classes.legalSubTitle}>Details of legal and sworn translation services provided by Translator UK</h3>
                    </div>
                    <p className={classes.legalText}>In the UK we do not have a sworn translation system in place like they do in countries such as France, Spain, Portugal etc. where there are governing bodies regulating sworn translators. Instead here in the UK we have three types of official translation, depending on the situation:</p>
                </div>
            </div>
            <Review />
        </>
    )
}

export default Legal
