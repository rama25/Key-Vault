const msRestAzure = require('ms-rest-azure');
const KeyVaultManagementClient = require('azure-arm-keyvault');
const KeyVault = require('azure-keyvault');
var http = require('http');

const subscriptionId = 'dc24c411-f701-4b2b-860e-2c9115455f65';
const resourceGroup = 'transfers';
const vaultName = 'bnet';
const tenantGUID = '72f988bf-86f1-41af-91ab-2d7cd011db47';
var vaultUri = "https://" + "bnet" + ".vault.azure.net/";



// msRestAzure.loginWithAppServiceMSI({resource: 'https://bent.vault.azure.net'}).then( (credentials) => {
//     const keyVaultClient = new KeyVault.KeyVaultClient(credentials);

//     var vaultUri = "https://" + "bnet" + ".vault.azure.net/";
    
//     keyVaultClient.setSecret(vaultUri, 'my-secret', 'test-secret-value', {})
//         .then( (kvSecretBundle, httpReq, httpResponse) => {
//             console.log("Secret id: '" + kvSecretBundle.id + "'.");
//             return keyVaultClient.getSecret(kvSecretBundle.id, {});
//         })
//         .then( (bundle) => {
//             console.log("Successfully retrieved 'test-secret'");
//             console.log(bundle);
//         })
//         .catch( (err) => {
//             console.log(err);
//         });

//     keyVaultClient.getSecret(vaultUri, "AppSecret", "").then(function(response){
//         console.log(response);    
        
//     })
// });

// Interactive Login
let client;
msRestAzure
  .interactiveLogin()
  .then(credentials => {
    client = new KeyVaultManagementClient(credentials, subscriptionId);
    return client.vaults.list();
  })
  // .then(vaults => {
  //   console.dir(vaults, { depth: null, colors: true });
  //   const parameters = {
  //     location: 'South India',
  //     properties: {
  //       accessPolicies: [],
  //       enabledForDeployment: false,
  //       tenantId: tenantGUID
  //     }
  //   };
  //   console.info('Creating vault ${vaultName} ...');
  //   return client.vaults.createOrUpdate(resourceGroup, vaultName, parameters);
  // })
 
  .then(vault => console.dir(vault, { depth: null, colors: true }))
  .catch(err => {
    console.log('An error occured');
    console.dir(err, { depth: null, colors: true });
    return err;
  });
  
