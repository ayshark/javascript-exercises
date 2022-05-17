const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  it('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
