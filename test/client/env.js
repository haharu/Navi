"use strict";

const Navi = require('../..');

const assert = require('assert');
const should = require('should');

let navi = new Navi();

describe('ENV', function () {
    it('should have agent and root', function () {
        navi.should.have.property('root');
        navi.should.have.property('agent');
    })

})
