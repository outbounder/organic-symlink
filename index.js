var Organel = require("organic").Organel;
var fs = require('fs');
var path = require("path");

module.exports = Organel.extend(function Symlink(plasma, config){
  Organel.call(this, plasma);

  if(config.target)
    for(var key in config.target) {
      for(var dirName in config.target[key])
        config.target[key][dirName] = path.join(process.cwd(),config.target[key][dirName]);
    }
  
  this.config = config;

  if(this.config.symlink)
    this.symlink(this.config.symlink)
},{
  symlink: function(c, next) {
    for(var key in c.target) {
      for(var dirName in c.target[key]) {
        var dest = path.join(process.cwd(),key,dirName);
        if(fs.existsSync(dest)) continue // TODO existsSync for invalid links returns false
        fs.symlinkSync(path.join(process.cwd(),c.target[key][dirName]), dest);
      }
    }
    next && next()
  },
  unsymlink: function(c, next) {
    for(var key in c.target) {
      for(var dirName in c.target[key]) {
        fs.unlinkSync(path.join(process.cwd(),key,dirName), console.log);
      }
    }
    next && next()
  }
})
