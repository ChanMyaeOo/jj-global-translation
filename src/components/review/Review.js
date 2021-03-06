import React from 'react'
import { Link } from 'react-router-dom'
import SmallLogo from '../../images/jj-logo.png'
import useStyles from './styles'

const Review = () => {
    const classes = useStyles();
    return (
        <div className={classes.reviewWrapper}>
            <div className={classes.review}>
                <div className={classes.leftReview}>
                    <h3>JJ Global Translation Translation Agency Reviews</h3>
                    <Link to="/review" className={classes.starReview}>★ ★ ★ ★ ☆</Link>
                </div>

                <div className={classes.rightReview}>
                    <p>In the past year, JJ Global Translation has been working with many clients providing a wide-range of translation services and we have received 1,453 reviews across various review-channels for our translator's work. As of the 1st of June 2021, the overall rating for our translation services provided as a company was <strong>4.4 out of 5 stars</strong>. If you have used our translation services and would like to leave a review for other would-be clients to see, please see: <Link to="/review" className={classes.reviewLink}>Review JJ Global Translation.</Link></p>
                    <div className={classes.smallLogoWrapper}>
                        <Link to="/"><img src={SmallLogo} className={classes.reviewLogo} alt="logo" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
