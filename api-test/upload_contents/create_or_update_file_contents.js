const fs = require('fs')
const {imgToBase64} = require('./imgToBase64')

var temp = imgToBase64('./helloworld1.png')

var output = {
  "message": "my commit message",
  "committer": {
    "name": "trello_import_js",
    "email": "trello_import_js@github.com"
  },
  "content": temp,
  "branch": "test-upload"
}

fs.writeFileSync('./helloworld.json',JSON.stringify(output),{encoding: 'utf-8'})
