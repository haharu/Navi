'use strict';

const assert = require('assert');
const should = require('should');

describe('check if browser', function() {
    describe('#global scope', function() {
        it('should have window and global variable and should be an object', function () {
            assert.equal(typeof window, 'object');
            assert.equal(typeof global, 'object');
            assert.equal(typeof self, 'object');
        })
    })
})
