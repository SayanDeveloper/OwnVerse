require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const ROPSTEN_PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    Goerli: {
      url: `https://goerli.infura.io/v3/${process.env.GOERLI_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
  },

};
