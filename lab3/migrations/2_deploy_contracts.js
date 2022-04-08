const BeanNFT = artifacts.require("BeanNFT");

module.exports = function(deployer) {
  deployer.deploy(BeanNFT);
}