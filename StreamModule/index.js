/*  2 way   
Reading from a stream
Create a readable stream
 Handle Stream  event -> data, end, and error */

const fs = require('fs');
const http = require("http");
const server = http.createServer();
server.on('request', (req, res) => {
    /*fs.readFile('input.txt', 'utf-8', (err, data) => {
        if (err)
            return console.error(err);

        res.end(data);

    });*/
    // this data come from in chunck by chunck
    /* const rstream = fs.createReadStream('input.txt');
     
     rstream.on('data', (chunkdata) => {
         res.write(chunkdata);
     });
     rstream.on('end', (err) => {
         res.end();
     });
     // its handel  error
     rstream.on('error', (err) => {
         console.log(err);
         res.end("File.not Found");
     })*/
    // third way (both are same way)
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);

});
server.listen(8877, "127.0.0.1");