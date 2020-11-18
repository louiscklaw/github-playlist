const fs = require('fs')
const { join } = require( 'path' )

var temp = JSON.parse(fs.readFileSync('./all_export_from_trello.json',{encoding:'utf-8'}))

function parseTrelloCard(this_card){

  // var attachments_url = this_card.attachments[0].url

  var out_json = {
    title: this_card.name,
    owner: "louiscklaw",
    body: this_card.desc,
    assignee: "louiscklaw",
    "labels":['Bugs','import from trello']
  }
  return out_json
}

function parseTrello(){
  // console.log(temp.cards[0].labels[0].name)
  temp.cards.map(card => {
    card.simple_labels = card.labels.map(label => label.name)
    return card
  }  )

  var temp1 = temp.cards
    .filter( card => card.simple_labels.includes('Bug') )
    .map(this_card => parseTrelloCard(this_card))
  return temp1
}


module.exports={
  parseTrello
}