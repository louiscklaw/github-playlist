
const fs = require('fs')

function getDownloadUrlFrResponse(json_path){
  var resp_from_git = fs.readFileSync(json_path,{encoding: 'utf-8'})

  var json_resp_fr_git = JSON.parse(resp_from_git)
  return json_resp_fr_git.content.download_url
}

module.exports={
  getDownloadUrlFrResponse
}