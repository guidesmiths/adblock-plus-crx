var fs = require('fs')
var path = require('path')
var version = require('./package.json')['adblock-plus-crx'].version
var filename = 'Adblock-Plus_v' + version + '.crx'

module.exports = {
    path: path.join(__dirname, 'bin', filename),
    base64: function() {
        var crx = fs.readFileSync(this.path)
        return crx.toString('base64')
    }
}
