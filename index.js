var debug = require('debug')('adblock-plus-crx')
var fs = require('fs')
var path = require('path')
var filename = 'Adblock-Plus_v1.11.crx'

module.exports = {
    path: path.join(__dirname, 'bin', filename),
    base64: function() {
        var crx = fs.readFileSync(this.path)
        return crx.toString('base64')
    }
}
