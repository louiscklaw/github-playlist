import React from "react"
import Layout from "../components/layout"
import Navbar from '../components/nav'

import SEO from "../components/seo"

import RepoStatusContainer from '../components/RepoStatusContainer'


function IndexPage(){
  return(
    <Layout>
      <SEO title="Home" />
      <Navbar />
      <RepoStatusContainer />
    </Layout>
  )
}


export default IndexPage
