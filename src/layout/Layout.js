import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Search from '../components/search/Search'

const Layout = (props) => {
    
    return (
        <div>
            <Header />
            <hr />
            <Search />
            {props.children}
            <hr />
            <Footer />
        </div>
    )
}

export default Layout
