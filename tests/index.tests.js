var assert = require('assert')
var abp = require('../index')

describe('Adblock-Plus', function() {
    it('should expose the crx binary path', function() {
        assert(new RegExp('/adblock-plus-crx/bin/Adblock-Plus_v.+\.crx$').test(abp.path), 'crx path was incorrect')
    })
    it('should base64 encode the crx binary', function() {
        assert(/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/.test(abp.base64()), 'crx was not base64 encoded')
    })
})
