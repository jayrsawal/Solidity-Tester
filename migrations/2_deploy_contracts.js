var PumpToken = artifacts.require("./PumpToken.sol");
var CrowdSale = artifacts.require("./CrowdSale.sol");

module.exports = function(deployer) {
  deployer.deploy(PumpToken, 1000000000000, "PumpToken", "BAG").then(function() {
    return deployer.deploy(CrowdSale
      , '0x201eaf5132be5844437f1e653dc8d05d900730fe'
      , 100
      , 44640
      , 1
      , PumpToken.address
    );
  });
};