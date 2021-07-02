import React from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import Quote from '../../images/quote.webp'
import { languagesData } from '../../data/languages'
import SmallLogo from '../../images/jj-logo.png'

const Languages = () => {
    const classes = useStyles();
    return (
        <div className={classes.languages}>
            <h2>Translator UK Translation Languages</h2>
            <h3>Core translation languages offered by Translator UK translators</h3>
            <img src={Quote} alt="quote" className={classes.languagesQuote} />
            <p>Since 2010, Translator UK has performed translation services in over 425 different language combinations. It would not be possible for us to list them all. Below you will find the most common languages we have worked with - either from or to English - since we have started servicing translation clients in the UK.</p>
            <br />
            <p>If you do not see the language you require listed below, we would ask that you please contact us and let us know what language(s) you are after. We will most certainly be able to cater to your request and use professional translators based in the UK whenever possible or throughout the world that are specialised in the language combination you seek.</p>

            <Grid container className={classes.languagesServices}>
                {
                    languagesData.map(data => (
                        <Grid item md={4} lg={4} xl={4} xs={6} key={data.id}><Link to={`/languages/${data.id}`}>{data.title}</Link></Grid>        
                    ))
                }
            </Grid>
            <div className={classes.languageLogoWrap}>                
                <Link to="/"><img src={SmallLogo} alt="logo" className={classes.languagesSmLogo} /></Link>
            </div>
        </div>
    )
}

export default Languages
