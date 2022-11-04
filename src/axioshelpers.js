const axios = require('axios')
const qs = require('querystring')


/* var options = {
    responseType: 'json',
    "method": "post",
    url,
    data: qs.stringify({
        grant_type: "client_credentials",
        client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
        client_id: appid,
        client_assertion: token,
        
        resource: resource || appid
    })
}

//console.log(options)

axios(options).then(({
    data
}) => {
    resolve(data)
}).catch(({response}) => {
    reject(response.data)
})
 */
async function axiosClient (options, urlencoded, debug) {

    if (urlencoded == true) {
        options.data = qs.stringify(options.data)
    }
    if (debug) {
        console.log(options)
    }

    var data = await axios(options).catch((error) => {

        return Promise.reject(error)

    })
    
    return data

}


module.exports = {axiosClient}