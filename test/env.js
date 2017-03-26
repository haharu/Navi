'use strict';

const assert = require('assert');
const should = require('should');
const Navi = require('..');

let ROOT;

if (typeof window !== 'undefined') {
    ROOT = window;
} else {
    ROOT = global
}


describe('ENV', function () {
    it('should have agent and root', function () {
        Navi.should.have.property('root', ROOT);
        Navi.should.have.property('agent');
    })
})
