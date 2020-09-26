import React from 'react'

function GithubActionsBuildStatus({repo_name, branch}){
  return(
    <>
      <img src={`https://img.shields.io/github/workflow/status/${repo_name}/master_build/master?label=${branch}&logo=github&style=flat-square`} />
    </>
  )
}

export default GithubActionsBuildStatus
