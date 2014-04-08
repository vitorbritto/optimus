'use strict';

(function() {
    var jasmineEnv = jasmine.getEnv(),
        trivialReporter = new jasmine.TrivialReporter(),
        currentWindowOnload = window.onload;

    jasmineEnv.updateInterval = 1000;
    jasmineEnv.addReporter(trivialReporter);
    jasmineEnv.specFilter = function(spec) {
        return trivialReporter.specFilter(spec);
    };

    window.onload = function() {
        if (currentWindowOnload) {
            currentWindowOnload();
        }
        jasmineEnv.execute();
    };
})();
