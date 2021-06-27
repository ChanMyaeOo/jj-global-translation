import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Translation from './pages/translation/Translation'

const App = () => {
    return (
         <Router>
            <Switch>
                <Route path="/translation">
                    <Layout>
                        <Translation />
                    </Layout>
                </Route>
                <Route path="/">
                    <Layout>
                        <Home />
                    </Layout>
                </Route>
            </Switch>
        </Router>
    )
}

export default App