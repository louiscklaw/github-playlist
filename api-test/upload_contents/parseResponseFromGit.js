
const fs = require('fs')

var resp_from_git = fs.readFileSync('./response_from_git.json',{encoding: 'utf-8'})

var json_resp_fr_git = JSON.parse(resp_from_git)

console.log(json_resp_fr_git.content.download_url)