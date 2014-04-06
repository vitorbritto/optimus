#!/usr/bin/env node

/*
 * Optimus
 * https://github.com/vitorbritto/optimus
 *
 * Copyright (c) 2014 Vitor Britto
 * Licensed under the MIT license.
 */

var inquirer = require('inquirer');

var prompt = [
    {
        choices: [
            { name: 'Jasmine', value: 'jasmine' },
            { name: 'Mocha', value: 'mocha' },
            { name: 'QUnit', value: 'qunit' }
        ],
        name: 'boilerplate',
        message: 'Which JavaScript Test Framework would you like to use?',
        type: 'list'
    }
];

inquirer.prompt(prompt, function(answers) {

    var boilerplate = answers.boilerplate;

    switch (boilerplate) {

        case 'jasmine':
            require('./lib/bp-jasmine');
        break;

        case 'mocha':
            require('./lib/bp-mocha');
        break;

        case 'qunit':
            require('./lib/bp-qunit');
        break;

    }

});
