const fs = require('fs');

const writeFile = (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err) => {
      if(err) {
        reject(err);
      }
      else {
        resolve();
      }
    });
  });
};

module.exports = {
  writeFile
}
