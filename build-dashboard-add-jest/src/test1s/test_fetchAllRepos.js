import React from 'react'

function fetchAllRepos(){
  return fetch('/sample_all_repos.json')
    .then(r => r.json())
}

fetchAllRepos()
.then(r_json => {
  setResult(JSON.stringify(r_json, null, 2))
})

export default TestBox
