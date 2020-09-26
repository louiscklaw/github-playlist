import { assert } from 'console'
import fs from 'fs'
import {helloworld,getAllRepoNames} from '../utils/getAllRepoNames.js'

function test_Helloworld(){
  helloworld()
}

function test_GetAllRepoNames(){
  const sample_all_repo_json = JSON.parse(fs.readFileSync('./static/sample_all_repos.json'))

  assert(
    getAllRepoNames(sample_all_repo_json).indexOf('louiscklaw/github-playlist') > 0,
    'getAllReponames failed'
  )
}

function test(){
  test_Helloworld()
  test_GetAllRepoNames()
  return
}

export {
  test
}
