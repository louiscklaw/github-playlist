const fs = require('fs')
// const imageToBase64 = require('image-to-base64')

function imgToBase64(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

module.exports={
  imgToBase64
}