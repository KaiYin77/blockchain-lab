const HDWalletProvider = require('@truffle/hdwallet-provider');
const { RINKEBY } = require('./secret.json')

module.exports = {

  networks: {
   
    rinkeby: {
      provider: () => new HDWalletProvider(RINKEBY.PRIVATE_KEY, RINKEBY.INFURA_URI),

      network_id: 4,
      gas: 5500000,        
      confirmations: 2,    
      timeoutBlocks: 200,
      skipDryRun: true   
    },
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}