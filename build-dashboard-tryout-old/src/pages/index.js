import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Navbar from '../components/nav'

import SEO from "../components/seo"

import RepoStatusContainer from '../components/RepoStatusContainer'

function IndexPage(){
  if (typeof window !== "undefined"){
    navigate('dashboard')
  }

}


export default IndexPage
