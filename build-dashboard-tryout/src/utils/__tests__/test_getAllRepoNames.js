import { assert } from 'console'
import fs from 'fs'
import {getAllRepoNames} from '../getAllRepoNames.js'

describe("helloworld", () => {
  it('test helloworld call', () => {

    const sample_all_repo_json = JSON.parse(fs.readFileSync('./static/sample_all_repos.json'))

    assert(
      getAllRepoNames(sample_all_repo_json).indexOf('louiscklaw/github-playlist') > 0,
      'getAllReponames failed'
    )

  })
})
