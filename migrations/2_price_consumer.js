const PriceConsumer = artifacts.require("PriceConsumer");

module.exports = async (deployer) => {
  try {
    await deployer.deploy(PriceConsumer);
  } catch (err) {
    console.error(err);
  }
};
