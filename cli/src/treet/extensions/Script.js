const fs = require("fs");

module.exports = ({ relativePath, dirPath, name, ext }) => {
  console.log(
    fs.readFileSync(dirPath + "/" + name + "." + ext, {
      encoding: "utf8",
    })
  );

  return {
    Path: dirPath,
    Name: name,
    ClassName: ext,
    Source: fs.readFileSync(dirPath + "/" + name + "." + ext, {
      encoding: "utf8",
    }),
  };
};
