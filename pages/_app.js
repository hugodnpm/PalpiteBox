import React from 'react'
import '../css/styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }) => {

    return (
        <div>
        <Header/>
                
        <div className= "container mx-auto px-4">    
        <Component {...pageProps} />
        </div>
        <Footer/>
        </div>
    )
}
export default MyApp