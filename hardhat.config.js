require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PROVIDER_URL = process.env.PROVIDER_URL;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url:"http://127.0.0.1:8545",
      chainId: 31337,
    },
    sepolia: {
      url: PROVIDER_URL,
      chainId: 1115111,
      accounts: [],
    },
  },
  solidity: "0.8.19",
};
