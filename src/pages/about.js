import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
             <Head title="About" />
            <h1>About Page</h1>
            <p>This is my gatsby bootcamp</p>
            <p>Contact me <Link to="/contact">Here</Link></p>
        </Layout>        
    )
}

export default AboutPage