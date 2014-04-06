module( "Qunit Boilerplate", {
    setup: function() {
        // prepare something for all following tests
    },
    teardown: function() {
        // clean up after each test
    }
});

test('basic test', function() {
    expect(1);
    ok(true, 'this had better work.');
});


test('can access the DOM', function() {
    expect(1);
    var fixture = document.getElementById('qunit-fixture');
    equal(fixture.innerText, 'this had better work.', 'should be able to access the DOM.');
});
