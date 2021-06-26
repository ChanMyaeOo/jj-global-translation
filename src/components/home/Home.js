import React from 'react'
import Header from '../header/Header'
import { Divider } from '@material-ui/core'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const Home = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <div>
                        <Header />
                        <Divider />
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default Home
