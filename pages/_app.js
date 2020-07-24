import React from 'react'
import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {

    return (
        <div class Name = 'container mx'>
            <div className='bg-gray-200 p-4'>
                PalpiteBox
            </div>
            <h1>My App</h1>
            <Component {...pageProps} />
        </div>
    )
}
export default MyApp