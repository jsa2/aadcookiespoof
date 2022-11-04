const { default: axios } = require("axios");
const { runCurl } = require("./src/curl");
const {decode} = require('jsonwebtoken')

module.exports={azureLogin}

async function azureLogin (cookie, userAgent) {

var authority = "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?"
var client_id = "89bee1f7-5e6e-4d8a-9f3d-ecd601259da7"
//var scope = "https://graph.microsoft.com/.default offline_access"
var scope = "https://management.azure.com/user_impersonation"
var response_mode="form_post"
var code_challenge = "Wwwup5nUrupE3b_ovz-YulaiC8wby2PMCWIV_8MBwVA"
var response_type="code"

var url = `${authority}client_id=${client_id}&response_mode=${response_mode}&response_type=${response_type}&code_challenge=${code_challenge}&code_challenge_method=S256&scope=${scope}`
/* var cookie = require('./cookie.json')[1] */
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

//require('fs').writeFileSync('cookie.json', JSON.stringify(headers))
var authCode = data.split('value="')[1].split('" />')[0]
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
  -H 'Referer: dog' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  --data-raw 'client_id=${client_id}
  &scope=${scope}
  &code=${authCode}
  &code_verifier=3Na4byE7G0w-nGPTz-iCvtB8ZhBROY5itt987E_8V08
  &grant_type=authorization_code' \
  --compressed
`


var {access_token} = await  runCurl(payLoad)
console.log(decode(access_token))


var o ={
  method: 'get',
  url: `https://management.azure.com/subscriptions?api-version=2020-01-01`,
  headers: {
    Authorization: `Bearer ${access_token}`,
    'content-type': 'application/json',
    "user-agent":userAgent,
  }
}

try {
  var {data}=await axios(o)
  console.log(data)
  return data
} catch(error) {
  throw(new Error(JSON.stringify(error?.response?.data)))
}


}