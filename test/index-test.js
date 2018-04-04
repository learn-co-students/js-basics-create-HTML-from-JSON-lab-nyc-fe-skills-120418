const chai = require("chai");
const expect = require("chai").expect;
const assert = require("chai").assert;
const fs = require("fs");
const jsdom = require("mocha-jsdom");
const path = require("path");

const should = chai.should();

const html = fs.readFileSync(
  path.resolve(__dirname, "..", "index.html"),
  "utf-8"
);

const script = fs.readFileSync(path.resolve(__dirname, "..", "index.js"));
jsdom({ html, script });

before
describe("index.html", () => {
  it("does not have JSON data on initial load", () => {
    assert.include(document.querySelector("#title").innerHTML, "Title");
    assert.include(document.querySelector("#director").innerHTML, "Director");
    assert.include(document.querySelector("#genre").innerHTML, "Genre");
  });
});
