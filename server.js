const nearAPI = require('near-api-js');
const { utils: { PublicKey, key_pair: { KeyType } } } = require('near-api-js');
const fs = require("fs");

const paraslists = [
'ed25519:hHJbKGou5nuRSxK7GeVMVYfTgoawTSFV8BXpQ6bi6Q7',
'ed25519:2jvxY313sNN1X5TKcirC38gcJM9rdoUSERHL7pzSoWYE',
'ed25519:36DW8tJKw9wM1d74dfC8sYk7RE1LMK1wgBQ3mrtt2SvE',
'ed25519:5BjiUwqwFtKR2B7rzvwTBchCVs53zMoEvc1BRZoKt44t',
'ed25519:5CQU5WY1zYUxuDjyJ2ii2ftibHr2gGePAL5gTnzZH5rU',
'ed25519:5UiXotmSft5feUJRRJD4ZNGYA1wTaVXYxVh32fQbLp8n',
'ed25519:5WP5M3mqvtbniAB2dhmhEWCcAfEBpCX283KYrgShTNrt',
'ed25519:5jQ6UqHs8h9kSfWg7N3BJ1EDRz2RcDJZzchWgF76ugfK',
'ed25519:7F3XvA6exoMgdhwRmeLF2a3YKyEfkZz8iuRDbiiaSjBx',
'ed25519:8A59V44ophHMRN2sSZ8a1dw33hbXQYiNEYXzdBLTF236',
'ed25519:8LyVir2zem726tXqeHBccBRtyVXHJVsWqSoWEARWnPCV',
'ed25519:8Yi1smoeW9NBfniGjcrf4mdfESpv4ssNcQvQVb3SNr8y',
'ed25519:CnB7YXbHeK8n2BZgMt75zpH9TQeur5Qqy3zdDN71b6CC',
'ed25519:DdRYppChBxgrQWp5FwC93GmJ6jkvJoRCtaqrvsLqWJAc',
'ed25519:EAveDJ47YVMHyhsKcZ2p2sZD1ZwBHVydC3nBz7ibYNfN',
'ed25519:EETtxVLyhwSH5AsW4oeRBoVv4gSd6wQGTCAUzXY66com',
'ed25519:FyxLWZsKRW3zXFyTRBciEAHukEpEb135goKmJYqz6SHg',
'ed25519:HrphL9gpFjQ7g8dUwAgGYo8zvRrbvNaZzQeswNpxb9iq'
];


(async () => {
	try {
		console.log('Started')
		for( let index=0 ; ; index++){
			const randomKey = await nearAPI.KeyPair.fromRandom('ed25519'); 
			const publicKey = randomKey.publicKey.toString();
			const secretKey = randomKey.secretKey;
			//console.log('randomKey',publicKey)
			
			if( paraslists.includes(publicKey) ){
				console.log('randomKey',publicKey)
				console.log('secretKey',secretKey)
				const data = '@  '+publicKey+','+ secretKey+'  @'+'\n';
				fs.writeFile("temp.txt", data, { flag: 'a+' }, (err) => {
					if (err) console.log(err);
					console.log("Successfully Written to File.");
				});
				break;
			}
		}
           
    } catch (error) {
        console.log(error)
    }
})()
