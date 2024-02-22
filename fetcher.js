// const net = require('net');
// const conn = net.createConnection({
//   host: 'example.edu',
//   port: 80
// });
// conn.setEncoding('UTF8');

// //This code is making a valid HTTP 1.1 request using the minimum number of possible "words". Here is the text being sent to the server.
// conn.on('connect', () => {
//   console.log(`Connected to server!`);

//   // conn.write(`GET / HTTP/1.1\r\n`);
//   // conn.write(`Host: example.edu\r\n`);
//   // conn.write(`\r\n`);
// });

// /**
//  * HTTP Response
//  * After request is made, the HTTP server should send us HTTP data via our TCP connection
//  * Print the data to the screen, and end the connection
//  */
// conn.on('data', (data) => {
//   console.log(data);
//   conn.end();
// });

const fs = require("fs");
const request = require("request");

const commandContent = process.argv.slice(2);
const url = commandContent[0];
const localPath = commandContent[1];

request(url, (error, response, body) => {
  fs.writeFile(localPath, body, (error) => {
    let bodyCount = body.length;
    if (error) {
      console.log("error:", error); // Print the error if one occurred
    }
    console.log(`Downloaded and saved ${bodyCount} bytes to ${localPath}`); // Print the HTML for the Google homepage.
  });
});