
function fetchAllRepos(){
  return fetch('//all_repos.json')
    .then(r => r.json())
}

export {fetchAllRepos}
