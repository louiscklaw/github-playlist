const fs = require('fs')

var temp = JSON.parse(fs.readFileSync('./test_helloworld.json',{encoding:'utf-8'}))

var this_card = temp.cards[0]
var attachments_url = this_card.attachments[0].url
var out_json = {
  title: this_card.name,
  owner: "louiscklaw",
  body: this_card.desc,
  assignee: "louiscklaw",
  "labels":['Bugs','import from trello']
}

console.log(attachments_url)
// fs.writeFileSync('./github_issue_helloworld.json',JSON.stringify(out_json))
