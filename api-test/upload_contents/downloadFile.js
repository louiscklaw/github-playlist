const http = require( 'http' );
const fs = require( 'fs' );
const path = require( 'path' );

function downloadFile( url, cb ) {
  const file = fs.createWriteStream( "file.jpg" );
  try {
    const request = http.get( url, function ( response ) {
      response.pipe( file );
    } )

  } catch ( error ) {
    return cb( error )
  } finally {
    return cb( '', path.resolve( file.path ) )
  }
}


module.exports = {
  downloadFile
}
