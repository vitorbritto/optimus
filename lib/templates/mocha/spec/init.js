'use strcit';

var expect = chai.expect;

mocha.setup({
    ui: 'bdd',
    ignoreLeaks: true
});

onload = function () {
    mocha.run();
};
