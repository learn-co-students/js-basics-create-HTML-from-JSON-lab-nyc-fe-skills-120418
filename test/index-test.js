const jsd = require("jsdom")
console.log(jsd);
const {jsdom} = jsd;


fs = require("fs");
path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "..", "index.html"),
  "utf-8"
);

d = new jsdom(html, {runScripts: "dangerously", resources: "usable"})
console.log(d.window);
// console.log(document);
// console.log(window);
// $ = require('jquery')
// require('../index.js')
// handleJSON
// describe("tests", function() {
//     before(() => {
//
//     })
//     it("has inputs and an output", () => {
//
//         console.log(handleJSON);
//         console.log("test ran");
//         // console.log(handleJSON);
//         // console.log("in test: ", document.getElementById("title").innerHTML)
//
//       });
// })
//   console.log(dom)
//

//
//
//
// })
// // chai = require("chai");
// expect = require("chai").expect;
// assert = require("chai").assert;
// fs = require("fs");
// jsdom = require("jsdom");
// path = require("path");
// should = chai.should();
//
