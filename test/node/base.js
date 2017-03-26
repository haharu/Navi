'use strict';

const _ = require('lodash');
const assert = require('assert');
const should = require('should');

describe('Lodash', function() {
    describe('check if lodash api is avalible', function() {
        it('should return empty string except of null or undefined', function() {
            assert.equal(_.trim(' '), '');
        });
    });
});
