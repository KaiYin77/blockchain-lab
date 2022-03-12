const Beans = artifacts.require("Beans");

module.exports = function (deployer) {
  deployer.deploy(Beans, 1000000);
};
