import fs from 'fs'
import {helloworld, getAllRepoNames} from '../getAllRepoNames.js'

describe("test_getAllRepoNames", () => {
  const sample_all_repo_json = JSON.parse(fs.readFileSync('./static/sample_all_repos.json'))

  it('test helloworld call', () => {
    expect(helloworld()).toBe('helloworld');
  })

  it('test getAllRepoNames', () => {
    expect(getAllRepoNames(sample_all_repo_json)).toEqual(expect.arrayContaining(['louiscklaw/github-playlist']));
  })

})
