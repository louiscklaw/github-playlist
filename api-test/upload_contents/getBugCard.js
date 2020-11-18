const fs = require('fs')
var all_cards_string = fs.readFileSync('./trello_all_cards.json',{encoding: 'utf-8'})

var all_cards_json = JSON.parse(all_cards_string)
var all_cards = all_cards_json.cards

var bug_cards = all_cards
  .map(x => {
    x.flattern_labels = x.labels.map(xx => xx.name)
    return x
  })
  .filter( y => y.flattern_labels.length != 0)
  .filter( yy => yy.flattern_labels.indexOf('Bug') > -1)
  .sort()

for(i= 0; i<1; i++ ){
  var bug_card = bug_cards[i]

  var myData=["Bug","new labels OK ?", ...bug_card.flattern_labels]
  var uniqueAndSorted = [...new Set(myData)].sort()

  var desc_body = `
### From Trello (lynked-insight)

${bug_card.desc}

### Image if any:


  `.trimStart()

  var output = {
    title:bug_card.name,
    owner:"From Trello (lynked-insight)",
    body: desc_body,
    assignee: "louiscklaw",
    labels: uniqueAndSorted
  }
  fs.writeFileSync('/home/logic/_workspace/github-playlist/api-test/create_issues/issue_content.json',JSON.stringify(output),{encoding: 'utf-8'})
}
