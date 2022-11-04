# Cookie replay client for testing Azure AD Identity Protection

I made this client to test various features of [Azure AD Identity Protection](https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection). 

📑 Based on testing it requires some 10-30 days of data before any alerts will fire from replayed cookies

<img width="429" alt="image" src="https://user-images.githubusercontent.com/58001986/153801573-782f7ee7-f28c-4103-9218-4db34a30a528.png">


**Example**

https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks#sign-in-risk


*Unfamiliar sign-in properties can be detected on both interactive and non-interactive sign-ins. When this detection is detected on non-interactive sign-ins, it deserves increased scrutiny due to the risk of token replay attacks.*

*This detection indicates that there are abnormal characteristics in the token such as an unusual token lifetime or a token that is played from an unfamiliar location. This detection covers Session Tokens and Refresh Tokens.*

---
 
  ⚠ Only use this tool if you know what you are doing and have reviewed the code

  ⚠ Always test the tool first in test environments, with non-sensitive data

---
As the licenses says, 0%  Liability 0% Warranty



## What does it do? 
Uses the ESTSAUTH cookie for non device-SSO flow (Device SSO cookies require different attributes in the requests)
1. Sends mail to user
2. Gets user mail settings
3. Tries to list user Azure Subscriptions
4. Uploads random data from randomuser.me/api to onedrive


## prereqs
1. Azure Cloud Shell opened in BASH
   

2. Run setup
`` curl -o- https://raw.githubusercontent.com/jsa2/aadcookiespoof/main/remote.sh | bash`` 
  

## Spoofing
From any browser perform fresh sign-in via https://office.com, then copy the **FIRST** occurence of ESTSAUTH cookie with fresh sign-in (use inPrivate browser to ensure no device flows are used, and no existing session is active)

⚠️ Ensure you have MFA requirements satisified in the request if you plan to replay it from location that requires MFA. Otherwise replay from Cloud Shell will fail.

![image](https://user-images.githubusercontent.com/58001986/152730258-ae782584-095a-400d-bbee-7532f96f6d8e.png)

**Run following in bash to create the template**
 - paste the cookie contents to command
```sh
echo '[ 
  {
      "user":"mega",
      "cookie":"ESTSAUTH=0.AU8Aob9...."
  }
]' > cookies.json
```

❌ This tool checks the cookie length to match that of expected before proceeding. Don't select "KMSI" when signing


**Spoof**

RUN

``` 
cd aadcookiespoof
node manual.js 
```


![image](https://user-images.githubusercontent.com/58001986/152733612-77f64c18-df0a-4209-b4e9-88bdb1efbf74.png)
