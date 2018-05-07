
import ServerMock from "mock-http-server";

describe('Test', function() {

    // Run an HTTP server on localhost:9000
    const server = new ServerMock({host: "localhost", port: 9000});

    beforeEach(function (done) {
        server.start(done);
    });

    afterEach(function (done) {
        server.stop(done);
    });

    it('should do something', function (done) {
        server.on({
            method: 'GET',
            path: '/resource',
            reply: {
                status: 200,
                headers: {"content-type": "application/json"},
                body: JSON.stringify({hello: "world"})
            }
        });
        done();
    });
});

