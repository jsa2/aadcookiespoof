const { createTraffic } = require("./run");
var {randomBytes} = require('crypto')
var d = randomBytes(12).toString('base64url')
var userAgent = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15`
createTraffic(userAgent)