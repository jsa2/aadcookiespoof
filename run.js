const { azureLogin } = require("./azureLogin");
const { createOneDriveItem } = require("./CreateOneDriveItem");
const { readMail } = require("./listMail");
const { sendMail } = require("./sendMail");

module.exports={createTraffic}

async function createTraffic (userAgent) {

    var users = require('./cookies.json')

    for await (user of users) {
        if (user.cookie.length < 500) {
            console.log(('aborting, cookie not correct'))
            return;
        }
        console.log(user.cookie.length)
        console.log(user?.user, user)
        await run (user.cookie,userAgent)
    }

}

async function run(cookie,userAgent) {

    try {
    var s = await sendMail(cookie,userAgent)
    console.log(s) } catch (error) {
        console.log('mail login failed')
    }
    
    try {
    var s = await createOneDriveItem(cookie,userAgent)
    console.log(s) } catch (error) {
        console.log('Onedrive login failed')
    }
    

    try {
    await azureLogin(cookie,userAgent) } catch(error) {
        console.log('azure login failed', error)
    }


}