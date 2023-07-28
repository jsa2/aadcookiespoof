

// Kudos to Jan Bakker for this part
/* let cookie = [{"path":"/","domain":"login.microsoftonline.com","expirationDate":1711795060,"value":"","name":"SignInStateCookie","httpOnly":true}]
 */
let cookie 

for (let i = 0; i < 3; i++) { 

  /*   console.log(cookie[i].name+"="+cookie[i].value) */
    document.cookie= cookie[i].name+"="+cookie[i].value+"; expires=Wed, 05 Aug 2040 23:00:00 UTC; path=/"; 

}
