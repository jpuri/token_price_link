/* eslint-disable @typescript-eslint/no-var-requires 

This repo is for testing on kovan network only.
You can get truffle teams and do a forking version of
these tests.
*/

const { assert } = require("chai");

contract("PriceConsumer", () => {
  const PriceConsumer = artifacts.require("PriceConsumer");
  let priceConsumer;
  describe("getLatestPrice", () => {
    beforeEach(async () => {
      priceConsumer = await PriceConsumer.new();
    });
    it("is defined", async () => {
      assert.isDefined(priceConsumer.getLatestPrice);
    });
  });
});
