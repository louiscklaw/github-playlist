#!/usr/bin/env node

const fs = require( 'fs' )
const fetch = require( 'node-fetch' )

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

fetch( 'https://api.github.com/user/repos', {
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`
    },
  } )
  .then( r => r.json() )
  .then( r_json => {
    const repo_fullname_only = r_json.map( x => x.full_name )
    // fs.writeFileSync('repos.json',JSON.stringify(r_json),{encoding: 'utf-8'})
    fs.writeFileSync( 'repo_fullname_only.json', JSON.stringify( repo_fullname_only ) )

  } )


fetch( 'https://api.github.com/repos/louiscklaw/github-playlist/branches', {
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`
    },
  } )
  .then( r => r.json() )
  .then( r_json => {
    fs.writeFileSync( 'branch_status.json', JSON.stringify( r_json ) )

  } )

fetch( 'https://api.github.com/repos/louiscklaw/github-playlist/actions/workflows', {
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`
    },
  } )
  .then( r => r.json() )
  .then( r_json => {
    fs.writeFileSync( 'github_playlist_workflows.json', JSON.stringify( r_json ) )
    // var master_build_workflow_id=r_json.workflows.filter(x => x.name=='master_build')
    // console.log(master_build_workflow_id)
    var master_build_job_json = r_json.workflows.filter(x => x.path=='.github/workflows/master_build.yml')[0]
    var master_build_job_id = master_build_job_json.id
    console.log(master_build_job_id)

    fetch( `https://api.github.com/repos/louiscklaw/github-playlist/actions/workflows/${master_build_job_id}/runs`, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`
      },
    } )
    .then( r => r.json() )
    .then( r_json => {
      var total_count = r_json.total_count
      var conclusion = r_json.workflow_runs[0].conclusion

      console.log(total_count)
      console.log(conclusion)

      fs.writeFileSync( 'runs.json', JSON.stringify( r_json ) )
    } )
  } )
