import React from "react"

import Layout from "../components/layout"
import Navbar from '../components/nav'
import SEO from "../components/seo"

import RepoStatusContainer from '../components/RepoStatusContainer'

function DashboardPage(){

  return(
    <Layout>
      <SEO title="Dashboard" />
      <Navbar />
      <RepoStatusContainer />
    </Layout>
  )
}

export default DashboardPage
