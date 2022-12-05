/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.17",
    defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.DEV_API_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
