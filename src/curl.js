const {exec} =require('child_process')
const wexc = require('util').promisify(exec)

async function runCurl (payLoad) {

    var {stdout}=await wexc(payLoad)

    return JSON.parse(stdout)

}

module.exports={runCurl}