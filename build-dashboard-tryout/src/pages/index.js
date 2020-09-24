import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Navbar from '../components/nav'

import SEO from "../components/seo"

import RepoStatusContainer from '../components/RepoStatusContainer'

function Home() {
  return(
    <Layout>
      <SEO title="Home" />
      redirecting to dashboard
      {typeof window !== `undefined` ? navigate('/dashboard') : null}
    </Layout>
  )
}

export default Home
