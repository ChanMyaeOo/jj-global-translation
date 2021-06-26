import React from 'react'
import { Link } from 'react-router-dom'
import SmallLogo from '../../images/small-logo.webp'
import useStyles from './styles'

const Review = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.review}>
                <div className={classes.leftReview}>
                    <h3>Translator UK Translation Agency Reviews</h3>
                    <Link to="/" className={classes.starReview}>★ ★ ★ ★ ☆</Link>
                </div>

                <div className={classes.rightReview}>
                    <p>In the past year, Translator UK has been working with many clients providing a wide-range of translation services and we have received 1,453 reviews across various review-channels for our translator's work. As of the 1st of June 2021, the overall rating for our translation services provided as a company was <strong>4.4 out of 5 stars</strong>. If you have used our translation services and would like to leave a review for other would-be clients to see, please see: <Link to="/" className={classes.reviewLink}>Review Translator UK.</Link></p>
                    <img src={SmallLogo} className={classes.reviewLogo} alt="logo" />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Review
