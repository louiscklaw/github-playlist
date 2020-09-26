import React from 'react'
// import BuildStatusCell from './BuildStatusCell'

import RepoStatus from './RepoStatus'
// import {getAllRepoNames} from '../utils/getAllRepoNames'

import './repo-status-container.css'

// const test_repo_names = getAllRepoNames()

import ApiContext from '../contexts/ApiContext'

import {getAllRepoNames} from '../utils/getAllRepoNames'

function AllReposStatus(props){
  let {all_repo_json} = React.useContext(ApiContext)

  return(
    <div className="repos-status">
      {
        getAllRepoNames(all_repo_json).map( x => {
          return(
            <RepoStatus repo_name={x} />
          )
        })
      }
    </div>
  )
}

function RepoStatusContainer(){
  return(
    <>
      <div style={{margin: 'auto'}}>
        <div className="repo-status-container">

          <AllReposStatus />

        </div>
      </div>
    </>
  )
}

export default RepoStatusContainer
