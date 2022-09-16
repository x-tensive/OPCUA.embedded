const https = require("https");
const updateLinks = require("./update-wiki-links");

const token = "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";

var options = {
    host: "api.github.com",
    path: "/repos/x-tensive/OPCUA.embedded/releases/74103366/assets",
    method: "GET",
    headers: {
        "User-Agent": "update-wiki-links",
        authorization: "token " + token,
        "Content-Type": "application/json"
    }
};

https.request(options, function(response) {
    var responseBody = "";
    response.setEncoding("utf8");
    response.on("data", function (chunk) {
        responseBody += chunk;
    });
    response.on("end", function () {
        var data = JSON.parse(responseBody);
        updateLinks(data);
    });
}).end();
