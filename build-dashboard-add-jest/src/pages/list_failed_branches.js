import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Navbar from '../components/nav'

import SEO from "../components/seo"

import RepoStatusContainer from '../components/RepoStatusContainer'

function ListFailedBranches() {
  return(
    <Layout>
      <SEO title="Dashboard" />
      <Navbar />
    </Layout>
  )
}

export default ListFailedBranches
