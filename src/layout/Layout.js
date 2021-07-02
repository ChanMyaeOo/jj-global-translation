import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import useStyles from './styles'

const Layout = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.layout}>
            <Header />
            <hr />
            {props.children}
            <hr />
            <Footer />
        </div>
    )
}

export default Layout
