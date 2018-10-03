// var _ = require("lodash");
var fs = require("fs");
// var data = require("./others/data.json");

// console.log(_.random(1, 100));
// console.log(_.add(4, 8));

// console.log(data.name);

// fs.readFile("./others/data.json", "utf-8", (err, data) => {
//   //   var data = JSON.parse(data);
//   //   console.log(data.name);
// });

// fs.readdir("C:/", (err, data) => {
//   console.log(data);
// });

var info = {
  Name: "John",
  Age: 24
};

fs.writeFile("./others/info.json", JSON.stringify(info), err => {
  console.log("Writing Finished.", err);
});
