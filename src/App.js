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
import Contact from './pages/contact/Contact'
import ServiceDetail from './pages/service-detail/ServiceDetial'
import LanguageDetail from './pages/language-detail/LanguageDetail'
import TranslationDetail from './pages/translation-detail/TranslationDetail'
import About from './pages/about/About'
import QuoteForm from './pages/quote-form/QuoteForm'
import ReviewPage from './pages/review-page/ReviewPage'

const App = () => {
    return (
         <Router>
            <Switch>
                <Route path="/review">
                    <Layout>
                        <ReviewPage />
                    </Layout>
                </Route>
                <Route path="/quote">
                    <Layout>
                        <QuoteForm />
                    </Layout>
                </Route>
                <Route path="/about">
                    <Layout>
                        <About />
                    </Layout>
                </Route>
                <Route path="/contact">
                    <Layout>
                        <Contact />
                    </Layout>
                </Route>
                 <Route exact path="/services">
                    <Layout>
                        <Services />
                    </Layout>
                </Route>
                <Route path="/services/:serviceId">
                    <Layout>
                        <ServiceDetail />
                    </Layout>
                </Route>
                <Route path="/languages/:languageId">
                    <Layout>
                        <LanguageDetail />
                    </Layout>
                </Route>
                <Route exact path="/languages">
                    <Layout>
                        <Languages />
                    </Layout>
                </Route>
                <Route path="/translation/:translationId">
                    <Layout>
                        <TranslationDetail />
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
