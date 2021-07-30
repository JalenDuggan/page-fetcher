const process = require('process')
const argv = process.argv
const data = argv.slice(2);
console.log(data);
const request = require('request');
const fs = require('fs')


request(data[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  const content = body
  
  fs.writeFile(data[1], content, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
    console.log(`Downloaded and saved ${content.length} bytes to ${data[1]}`);
  })

});






