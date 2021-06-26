import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Divider } from '@material-ui/core'
import Header from '../header/Header'
import Search from '../search/Search'
import Hero from '../hero/Hero'
import Showcase from '../showcase/Showcase'
import Quality from '../quality/Quality'


const Home = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <div>
                        <Header />
                        <Divider />
                        <Search />
                        <Hero />
                        <Showcase />
                        <Quality />
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default Home
