const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const private_key = process.env.PRIVATE_KEY;
const url = process.env.RPC_URL;

module.exports = {
  networks: {
    kovan: {
      provider: () => {
        return new HDWalletProvider(private_key, url);
      },
      network_id: "42",
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.6.6",
    },
  },
};
