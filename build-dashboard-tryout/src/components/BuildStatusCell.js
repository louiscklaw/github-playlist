import React from 'react'
import {Link} from 'gatsby'

import GithubActionsBuildStatus from './GithubActionsBuildStatus'

function BuildStatusCell({repo_name}){
  return(
    <>
      <div>
        <Link to={`https://www.github.com/${repo_name}`} >
          {repo_name}
        </Link>
        </div>
      <div><GithubActionsBuildStatus repo_name={repo_name} branch="master" /></div>
      <div><GithubActionsBuildStatus repo_name={repo_name} branch="develop" /></div>
    </>
  )
}

export default BuildStatusCell
