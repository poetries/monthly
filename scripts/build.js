
const { resolve } = require('path');
const { existsSync, lstatSync, readdirSync } = require('fs');

function readFileList(year, moon) {
  const fileList = [];
  const dirPath = resolve(`./docs/articles/${year}`);
  const isDir = existsSync(dirPath) && lstatSync(dirPath).isDirectory();
  if (!isDir) {
    return fileList;
  }
  const files = readdirSync(dirPath);
  files.forEach((item) => {
    const moon = item.slice(0, 2);
    fileList.push([
      `${year}/${moon}`,
      `${moon}月`
    ]);
  });
  return fileList.reverse();
}

module.exports = readFileList;
