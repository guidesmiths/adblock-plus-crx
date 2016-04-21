var assert = require('assert')
var abp = require('../index')

describe('Adblock-Plus', function() {
    it('should expose the crx binary path', function() {
        assert(new RegExp('/adblock-plus-crx/bin/Adblock-Plus_v1.11.crx$').test(abp.path), 'crx path was incorrect')
    })
    it('should base64 encode the crx binary', function() {
        assert(/=$/.test(abp.base64()), 'crx was not base64 encoded')
    })
})
