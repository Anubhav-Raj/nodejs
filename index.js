 //console.log("welcome to  channel 🥇");
 //  const name = "anubhav";
 //  console.log(name);
 const fs = require('fs'); // file system module
 // ceating a new file
 fs.writeFileSync('read.txt', "welcome to my home");

 fs.writeFileSync('read.txt', "anubhav rajput ,welcome to my home  anubhav "); // if file is not present then create  and  text store in file , other wise file is present  data overwite ho jata hai
 fs.appendFileSync('read.txt', "how are you  Iam  fine  thanks"); //  ye data over write nahi krta hai  jo data present hai uske last me  ye bala data  append kr deta hai.


 const buf_data = fs.readFileSync('read.txt');
 console.log(buf_data);
 // node.js  include an additional data type call buffer  (not acailable in browser's javaScript). buffer is mainly used to store binary data,  while reading from a file or receiving packets over the network.
 org_data = buf_data.toString(); // to sting  function is used convert the  binary data  into simple string.
 console.log(org_data);


 //Rename the file 
 fs.renameSync('read.txt', 'readWrite.txt'); // it is used to  rename the file.