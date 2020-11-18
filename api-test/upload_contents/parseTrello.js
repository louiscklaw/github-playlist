const fs = require('fs')
const {downloadAndUploadToGithub} = require('./downloadAndUploadToGithub')
const {execSync} = require('child_process')

var temp = JSON.parse(fs.readFileSync('./test_helloworld.json',{encoding:'utf-8'}))
var this_card = temp.cards[0]
var attachments_url = this_card.attachments[0].url

downloadAndUploadToGithub(attachments_url, (err, uploaded_path)=>{
  console.log(`upload path: ${uploaded_path}`)

  // var out_json = {
  //   title: this_card.name,
  //   owner: "louiscklaw",
  //   body: this_card.desc+`![]()`,
  //   assignee: "louiscklaw",
  //   "labels":['Bugs','import from trello']
  // }

  // fs.writeFileSync('./github_issue_helloworld.json',JSON.stringify(out_json))

  // execSync('curl -H "Authorization: token $GITHUB_TOKEN" \
  // -H "Accept: application/vnd.github.v3+json" \
  // https://api.github.com/repos/louiscklaw/trello-playlist/issues \
  // -d @issue_content.json',{encoding:'utf-8'})
})
