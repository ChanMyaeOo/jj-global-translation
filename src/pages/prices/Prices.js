import React from 'react'
import { Link } from 'react-router-dom'
import Quote from '../../images/quote.webp'
import useStyles from './styles'
import { pricesData } from '../../data/prices'
import Review from '../../components/review/Review'

const Prices = () => {
    const classes = useStyles();
    return (
        <div className={classes.prices}>
            <Link to="/quote">
                <img src={Quote} alt="quote" className={classes.priceQuote} />
            </Link>
            <h2>Translation Prices in the United Kingdom</h2>
            <h3 className={classes.priceHeader}>Prices of translation and related services offered by Translator UK Translation Agency</h3>
            <p>Every translation project, big or small, that Translator UK encounters requires a customised quotation. This is because there are many factors at play in determining exactly how much the price of the translation will be. These factors are outlined below:</p>

            <div className={classes.priceTitle}>
                <hr />
            </div>
            {
                pricesData.map(data => (
                    <div className={classes.priceTitle} key={data.id}>
                        <div>
                            <h3>{data.title}</h3>
                            <p>{data.text}</p>
                        </div>
                        <hr />
                    </div>
                ))
            }

            <Review />
        </div>
    )
}

export default Prices
