/*
 * Optimus
 * https://github.com/vitorbritto/optimus
 *
 * Copyright (c) 2014 Vitor Britto
 * Licensed under the MIT license.
 */

'use strict';

// Modules
var chai = require('chai');
chai.expect();
chai.should();

var optimus = require('../optimus.js');

// Test
describe('Generate files', function() {
    it('should prompt a select list', function() {
        optimus.should.be.a('object');
    });
});
