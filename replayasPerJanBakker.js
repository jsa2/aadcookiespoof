

// Kudos to Jan Bakker for this part
/* let cookie = [{"path":"/","domain":"login.microsoftonline.com","expirationDate":1711795060,"value":"0.AXoAUFT1SDoY1kWpzmjzy8aJR1tEZUfGMrBJg-Ydk3ZSdsp6AHQ.AgABAAQAAAD--DLA3VO7QrddgJg7WevrAgDs_wUA9P8Zl2qoI_mOLT2Qs5QOkMb96tQ2semoKMJ-Ka8Eib8QMO8PzwJSrYdZ9eXWVMNq-yuLCRVYdgV20Ytvljs__BarETvYLiPHARQzt0PEjFXAIZM1F3kwpOBAjTgtdy3H1I3C26ZCUh0WZvY4qZVGh93qpDHf9eA7FPjqnvLk7xKoIhQCKiB87BRTWsq_OTkrDH4POZe7XJ9LjtjekeHiEr0YuZtnhmnj4bsAt-A9jb3l1Wldyq2AUGqDTX5RufzoV2tCU5pz1OjYW1HYjXpK6LpuAPtBpKHs1vEKbiMvCbk9M9uVB6bSyVSiFu81ONauIUt5fbK79zhODV34_mngdeodJy5OH87k4TID9auv5QO3bPcJEdbAvB0O4dDktLgnzZe6WvqeqY0YAu5WBTzoPFS05X5mv7BowP_plWYphDTDIrJ_eRbNME0ZkpNv_k0Nl_E5xoUYL6jT9TuP6jsszmZvNXj-9XfaJKANCAyia_l8PmQRSqCqZAYLas7DpPgELonT5ktVvJ6WLNLFvRYGn0xsMp7-u7Sgm68G-kU-yYMtyjB6WPL9YZjT","name":"ESTSAUTH","httpOnly":true},{"path":"/","domain":"login.microsoftonline.com","expirationDate":1711795060,"value":"0.AXoAUFT1SDoY1kWpzmjzy8aJR1tEZUfGMrBJg-Ydk3ZSdsp6AHQ.AgABAAQAAAD--DLA3VO7QrddgJg7WevrAgDs_wUA9P9PRDyG-A1zuxNR3fSJvF2CF6_0gKy3hS5Hk0cPwwBBG2soyqv5iiz_aJgyCymnUVWHVr4BF5fqAJMLRF-PY4KcGwWBnKhYptMUooS_Gfg5mC_r2xLGuNocWcRJTuPboYtpZy7MZr5R_GpeGtwPPjgFs4_d_1NdvQYV4qDB5wY-oim3vSKxB9GJLqVTJwFY3y5aKuGd56kRtTB2zJ2EI6SOzkpmmzj6phSx1T3aOhpKuY8ib1FH-vYh2gCq7lcQUL5MlTHStru3TbtNXS37s-1-1KQ0iDT9P1wADyY60sh6PMfgC9fr3YX8Tg-XaMOR42INO6Hc_VU_eFYOwZJncuUMPOhCrZZUrHyX8z3DxCz5YVJhARbOAOaaNn-_VfHqAf6_gvKFbw","name":"ESTSAUTHPERSISTENT","httpOnly":true},{"path":"/","domain":"login.microsoftonline.com","expirationDate":1711795060,"value":"CAgABAAIAAAD--DLA3VO7QrddgJg7WevrAgDs_wUA9P_tFQUiVsqPIFG3fh2TAqv9xN3ybFkIYSuoKYE7eal00d7y2C5Az23lQa11nsdMnd2lXv-XaYu0wS6qh5Q49yB0Mpz1P2zplmYRMXfrLz7-bdrTmvQJyf3Rs1GSAWW8AVikvPEvs1hAjsaRoywJHwfgm8Kbg1UjoWjxz9T0UOUKIqd13e1l-MrGYZwYeF9aAC3mktgFxkuVD0jJ_7zaPy1mlSf2tqo7InVnMoubEgQF-1hUNI2LL1nPp2IgAyPgPWY3eA","name":"SignInStateCookie","httpOnly":true}]
 */
let cookie 

for (let i = 0; i < 3; i++) { 

  /*   console.log(cookie[i].name+"="+cookie[i].value) */
    document.cookie= cookie[i].name+"="+cookie[i].value+"; expires=Wed, 05 Aug 2040 23:00:00 UTC; path=/"; 

}
