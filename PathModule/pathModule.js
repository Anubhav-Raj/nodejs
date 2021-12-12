const path = require('path');
console.log(path.dirname('E:/node js/PathModuble/pathModule.js'));
console.log(path.extname('E:/node js/PathModuble/pathModule.js'));
console.log(path.dirname('E:/node js/PathModuble/pathModule.js'));
console.log(path.basename('E:/node js/PathModuble/pathModule.js'));

const mypath = (path.parse('E:/node js/PathModuble/pathModule.js'));
console.log(mypath.name);