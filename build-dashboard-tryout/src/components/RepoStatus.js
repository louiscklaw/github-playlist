import React from 'react'

import BuildStatusCell from './BuildStatusCell'

function RepoStatus({repo_name}){
  return(
    <>
      <BuildStatusCell repo_name={repo_name} />
    </>
  )
}

export default RepoStatus
