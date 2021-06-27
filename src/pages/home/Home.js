import React from 'react'
import { Divider } from '@material-ui/core'
import Search from '../../components/search/Search'
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
