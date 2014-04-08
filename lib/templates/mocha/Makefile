test:
	grunt test

watch-test:
	grunt watch

init-test:
	git submodule add https://github.com/visionmedia/mocha.git spec/vendor/mocha
	git submodule add https://github.com/chaijs/chai.git spec/vendor/chai
	git submodule init
	npm install

update-test:
	git submodule update
	npm install
