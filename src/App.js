import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Translation from './pages/translation/Translation'
import Prices from './pages/prices/Prices'
import Legal from './pages/legal/Legal'
import Languages from './pages/languages/Languages'
import Services from './pages/services/Services'

const App = () => {
    return (
         <Router>
            <Switch>
                 <Route path="/services">
                    <Layout>
                        <Services />
                    </Layout>
                </Route>
                 <Route path="/languages">
                    <Layout>
                        <Languages />
                    </Layout>
                </Route>
                <Route path="/translation">
                    <Layout>
                        <Translation />
                    </Layout>
                </Route>
                <Route path="/prices">
                    <Layout>
                        <Prices />
                    </Layout>
                </Route>
                 <Route path="/legal-translation">
                    <Layout>
                        <Legal />
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
