'use strict';

const assert = require('assert');
const should = require('should');
const Navi = require('../..');

describe('Scope', function() {
    it('should have window global object', function() {
        global.should.be.an.Object;
        window.should.be.an.Object;
        self.should.be.an.Object;
    })
})

describe('Parallels', function () {
    it('should only one thread exist',function () {
        let originUrl = window.location.href;
        Navi.pushState('#test');
        Navi.currentUrl().should.equal(`${originUrl}#test`);
        Navi.should.deepEqual(require('../..'));;
        Navi.replaceState(originUrl);
    })
})
