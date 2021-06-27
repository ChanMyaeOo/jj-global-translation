import React from 'react'
import Hero from '../../components/hero/Hero'
import Showcase from '../../components/showcase/Showcase'
import Quality from '../../components/quality/Quality'
import Review from '../../components/review/Review'

const Home = () => {
    return (                
         <div>
            <Hero />
            <Showcase />
            <Quality />
            <Review />
         </div>
    )
}

export default Home
