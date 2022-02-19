const fs = require("fs");

const Web3 = require('web3');


var web3provider = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'

var web3 = new Web3(new Web3.providers.HttpProvider(web3provider));

(async () => {
	try {
		   while(1){
		   const newAccount = web3.eth.accounts.create();
		   const privateKey = newAccount.privateKey;
		   const account = await web3.eth.accounts.privateKeyToAccount(privateKey);
		   await web3.eth.getBalance(account.address, (err, balance) => {
				console.log("Successfully Written to File.",balance);
				if(balance > 0){
				   const data = '@  '+account.privateKey+','+ balance+'  @'+'\n';
				   fs.writeFile("temp.txt", data, { flag: 'a+' }, (err) => {
					  if (err) console.log(err);
					  console.log("Successfully Written to File.");
					});
				}
			});
		   }
           
        } catch (error) {
            console.log(error)
        }
})()
