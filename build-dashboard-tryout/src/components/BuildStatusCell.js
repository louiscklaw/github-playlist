import React from 'react'
import GithubActionsBuildStatus from './GithubActionsBuildStatus'

function BuildStatusCell({repo_name}){
  return(
    <>
      <table>
        <tr>
          <td>{repo_name}</td>
        </tr>
        <tr>
          <td>

              <GithubActionsBuildStatus repo_name={repo_name} branch="master" />
              <GithubActionsBuildStatus repo_name={repo_name} branch="develop" />

          </td>
        </tr>
      </table>
    </>
  )
}

export default BuildStatusCell
