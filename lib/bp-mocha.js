// ====================
// SETTINGS
// ====================

// Modules
var sh  = require('shelljs'),
    cli = require('cli-color');

// Messages
var error = cli.red.bold,
    info  = cli.cyan,
    done  = cli.green;

// Check
var checkNode = sh.which('node'),
    checkGit  = sh.which('git');


// ====================
// BUILD
// ====================

// Welcome Message
sh.echo(info('→ Initializing...'));

// Create
sh.echo(info('→ Creating Structure'));
sh.rm('-rf', [
    './node_modules',
    './.git',
    './spec',
    './src',
    '.gitignore',
    '.editorconfig',
    '.travis.yml',
    '.jshintrc',
    'optimus.js',
    'Gulpfile.js',
    'package.json',
    'README.md'
]);
sh.mv('./lib/templates/mocha/*', './');
sh.rm('-rf', ['./lib']);

// Setup
sh.echo(info('→ Setting up project'));

if (!checkGit) {
    sh.echo(error('✖ This task requires Git to run.'));
    sh.exit(1);
}

sh.echo(info('→ Creating a git repository'));
sh.exec('git init');

if (!checkNode) {
    sh.echo(error('✖ This task requires NodeJS to run.'));
    sh.exit(1);
}

sh.exec('make init-test');

sh.echo(done('✔ All Done!'));
