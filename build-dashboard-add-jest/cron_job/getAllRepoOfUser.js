#!/usr/bin/env node

const fs = require( 'fs' )
const fetch = require( 'node-fetch' )

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

function getAllRepos(page_num, user_token){
  console.log(`fetching page ${page_num}...`)
  return fetch( `https://api.github.com/user/repos?page=${page_num}&per_page=100`, {
    headers: {
      'Authorization': `token ${user_token}`
    },
  } ).then( r => r.json())
}

async function getAllRepoOfUser(user_token){
  let last_result = ['init_value']
  let page_num=0
  let all_repos=[]

  while (last_result.length > 0){
    page_num = page_num + 1
    last_result = await getAllRepos(page_num, user_token)
    all_repos = [...all_repos, ...last_result]

    // console.log(last_result)
  }

  fs.writeFileSync( 'all_repos.json', JSON.stringify( all_repos ) )

}

getAllRepoOfUser(GITHUB_TOKEN)
