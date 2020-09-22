#!/usr/bin/env node

const fs = require( 'fs' )
const fetch = require( 'node-fetch' )

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

function getAllRepoOfUser(username, user_token){

  fetch( 'https://api.github.com/user/repos', {
    headers: {
      'Authorization': `token ${user_token}`
    },
  } )
  .then( r => r.json() )
  .then( r_json => {
    fs.writeFileSync( 'all_repos.json', JSON.stringify( r_json ) )
    console.log(r_json.length)
  } )

}

getAllRepoOfUser('louiscklaw',GITHUB_TOKEN)
