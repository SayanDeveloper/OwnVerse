require("@nomicfoundation/hardhat-toolbox");

const ROPSTEN_PRIVATE_KEY = "12a998ef40a80c25a5c16b06c10e254ef4774848b37857ed26b2a9ccb47ee967";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    Goerli: {
      url: "https://goerli.infura.io/v3/a95462654a494a618f973f6cf7ae1b75",
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
  },

};
