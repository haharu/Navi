'use strict';

const assert = require('assert');
const should = require('should');
const Navi = require('../..');

describe('Scope', function() {
    describe('#global_object', function() {
        it('should have window and global variable and should be an object', function() {
            global.should.be.an.Object;
            window.should.be.an.Object;
            self.should.be.an.Object;
        })
    })
})
