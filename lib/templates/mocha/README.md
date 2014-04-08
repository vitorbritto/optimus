# Mocha Boilerplate

## Usage

**With Makefile:**

Each boilerplate folder contains a _Makefile_ with these tasks:

- `make init-test`: Execute the git submodules.
- `make update-test`: Updates the node packages and / or the git submodules.
- `make watch-test`: Run the test suite and watch for changes.
- `make test`: Run the test suite, with the framework's command line tool or grunt.

**With Grunt:**

The boilerplates also contain [grunt](http://gruntjs.com/) files, so you can easily re-run the tests when files change.

- `grunt`: Lint script files, run the test suite and watch for changes.
- `grunt test`: Execute Spec Runner.
- `grunt lint`: Lint Scripts
