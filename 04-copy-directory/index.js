const fs = require('fs');
const path = require('path');

const pathWhere = path.join(__dirname, 'files');
const pathTo = path.join(__dirname,'files_bak');

fs.mkdir(pathTo, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});



fs.readdir(pathWhere, (err, files) => {
  if (err) {
    throw new Error(err);
  }
  for (let i = 0; i < files.length;i++) {
    fs.copyFile(path.resolve(pathWhere,files[i]), path.resolve(pathTo,files[i]), (err) => {
      if (err) {
        throw new Error(err);
      }
    })
  }
})
