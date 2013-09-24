var fs = require('fs')
var path = require('path')

describe("symlink", function(){
  var Symlink = require("../index")
  var Plasma = require("organic").Plasma
  var dna = {
    symlink: {
      "target": {
        "node_modules": {
          "models": "tests/models"
        }
      }
    }
  }
  var instance;
  it("starts with symlinks into node_modules", function(next){
    instance = new Symlink(new Plasma(), dna)
    expect(fs.existsSync(path.join(process.cwd(), "node_modules", "models"))).toBe(true)
    next()
  })

  it("unlinks the same links", function(next){
    instance.unsymlink(dna.symlink)
    expect(fs.existsSync(path.join(process.cwd(), "node_modules", "models"))).toBe(false)
    next()
  })
})