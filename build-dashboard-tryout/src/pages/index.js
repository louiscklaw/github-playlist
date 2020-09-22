import React from "react"
import Layout from "../components/layout"
import Navbar from '../components/nav'

import SEO from "../components/seo"

import ThemeContext from '../contexts/ThemeContext'


function IndexPage(){
  return(
    <Layout>

      <SEO title="Home" />
      <Navbar />

    </Layout>
  )
}


export default IndexPage
