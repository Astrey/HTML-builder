const fs = require('fs');
const path = require('path');

 
const myPath = path.resolve(__dirname, 'secret-folder');
 
fs.readdir(myPath, function(err, items) {
 
    for (let i=0; i<items.length; i++) {
        fs.stat(path.resolve(myPath, items[i]), function(err, stats) {
            console.log(path.parse(items[i]).name+" - "+path.parse(items[i]).ext.match(/\w+/g)+" - "+stats.size / 1024 + ' kB');
        });
   
    }
});