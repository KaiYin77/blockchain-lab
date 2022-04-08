const BeanNFT = artifacts.require('BeanNFT');

contract("BeanNFT", (accounts) => {
    
    Before(async () => {
        beanNFT = await BeanNFT.deployed();
        console.log("BeanNFT deployed at: " + beanNFT.address);
    })
    it("check NFT balance", async () => {
        let balance = await beans.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, 1000000, "Balance should be 1M tokens for contract creator")
    })


})