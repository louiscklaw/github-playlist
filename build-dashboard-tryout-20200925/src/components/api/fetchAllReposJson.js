import {fetchJson} from './fetchJson'

function fetchAllReposJson(){
  return fetchJson('/all_repos.json')
}

export {fetchAllReposJson}
