const fs = require('fs')
const {parseTrello} = require( './parseTrello' )
const {execSync} = require('child_process')
// const {downloadAndUploadToGithub } = require('./downloadAndUploadToGithub')


// const upload_img_path=`https://raw.githubusercontent.com/louiscklaw/trello-playlist/test-upload/hello/image.png`

var ticket_json_body = parseTrello()
ticket_json_body_length = ticket_json_body.length
// console.log(ticket_json_body.length)


for(i=1; i<ticket_json_body_length;i++){
  var single_ticket = ticket_json_body[i]
  var create_ticket_command = `curl -H "Authorization: token $GITHUB_TOKEN"  -H "Accept: application/vnd.github.v3+json"  -d '${JSON.stringify(single_ticket)}'  https://api.github.com/repos/louiscklaw/trello-playlist/issues  `
  // console.log(create_ticket_command)
  execSync(create_ticket_command,{encoding: 'utf-8'})
}
