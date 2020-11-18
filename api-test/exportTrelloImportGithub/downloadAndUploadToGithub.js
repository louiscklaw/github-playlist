const fs = require('fs')
const {imgToBase64} = require('./imgToBase64')
const {downloadFile} = require('./downloadFile')
const { execSync } = require('child_process');
const path = require('path')

function trueIfPngFile(url_in){
  return url_in.search(/.+png$/) > -1
}

function getImageFilename(url){
  return path.basename(url)
}

function downloadAndUploadToGithub(url, cb){

  var img_filename = getImageFilename(url)

  downloadFile(url,  (err, file_path) => {
    if (err) throw err
    if (trueIfPngFile(url)){
      var temp = imgToBase64(file_path)
    }else{

      process.exit()
    }

    var output = {
      "message": "my commit message",
      "committer": {
        "name": "trello_import_js",
        "email": "trello_import_js@github.com"
      },
      "content": temp,
      "branch": "test-upload"
    }

    fs.writeFile( './helloworld.json', JSON.stringify( output ), { encoding: 'utf-8'},(err) =>{
      var upload_result = execSync(`curl -X PUT  -H "Authorization: token $GITHUB_TOKEN"  -H "Accept: application/vnd.github.v3+json"  -d @helloworld.json  https://api.github.com/repos/louiscklaw/trello-playlist/contents/hello/${img_filename}`, {encoding:'utf-8'})

      var json_result = JSON.parse(upload_result)

      // expected result should have content output
      if (typeof(json_result.content) != 'undefined'){
        return cb(err, json_result.content.download_url)
      }else{
        console.log('error found during upload')
        process.exit(-1)
      }

    } )
  })
}

module.exports={
  downloadAndUploadToGithub
}