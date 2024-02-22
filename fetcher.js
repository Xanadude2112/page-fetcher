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