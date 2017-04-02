'use strict';

const assert = require('assert');
const should = require('should');
const Navi = require('../..');

const testUrl = 'https://www.kkday.com/zh-tw/home/index2.php?hey=ho#foo_bar';

describe('Scope', function() {
    it('should have window global object', function() {
        global.should.be.an.Object;
        window.should.be.an.Object;
        self.should.be.an.Object;
    })
})

describe('Parallels', function() {
    it('should only one thread exist', function() {
        Navi.should.deepEqual(require('../..'));
        Navi.root.should.deepEqual(window);
    })
})

describe('#LinkTo', function() {
    describe('#hash', function() {
        it('should be end with #test', function() {
            let originUrl = window.location.href;
            Navi.linkTo('#test');
            Navi.current.href.should.equal(`${originUrl}#test`);
            Navi.replaceState(Navi.current.pathname);
            Navi.current.href.should.equal(originUrl);
        })
    })

})

describe('#State', function() {
    it('should pushState to history without page refresh', function() {
        let originUrl = window.location.href;
        Navi.pushState('test');
        Navi.current.href.should.equal(`${Navi.current.origin}/test`);
        Navi.pushState('/test');
        Navi.current.href.should.equal(`${Navi.current.origin}/test`);
        Navi.pushState('/');
        Navi.current.href.should.equal(`${Navi.current.origin}/`);
        Navi.pushState(originUrl);
        Navi.current.href.should.equal(originUrl);
    })
})
