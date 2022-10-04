const ethers = require('ethers')
const fs = require('fs')



const startProgram = (start,end, mnemonic) => {
let wallets = []

for(let i = start; i < end; i++) {
    const w = ethers.Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/"+i) 
   if (wallets.filter((e) => e.address === w.address).length === 0) {
    wallets.push({
        address: w.address,
        privateKey: w.privateKey
    })
}
   
}
return wallets
}





