var mockServer = require('mockserver-client'),
    mockServerClient = mockServer.mockServerClient;

mockServerClient("localhost", 1080).mockAnyResponse({
    "httpRequest": {
        "method": "POST",
        "path": "/login",
        "body": "{username: 'foo', password: 'bar'}"
    },
    "httpResponse": {
        "statusCode": 302,
        "headers": [
            {
                "name": "Location",
                "values": "https://www.mock-server.com"
            }
        ],
        "cookies": [
            {
                "name": "sessionId",
                "value": "2By8LOhBmaW5nZXJwcmludCIlMDAzMW"
            }
        ]
    }
});

new mockServerClient("localhost", 1090).verify(
    request()
        .withMethod("POST")
        .withPath("/login")
        .withBody(exact("{username: 'foo', password: 'bar'}"))
        .withCookies(
            new Cookie("sessionId", ".*")
        ),
    VerificationTimes.exactly(1)
);

VerificationTimes.once();
VerificationTimes.exactly(count);
VerificationTimes.atLeast(count);