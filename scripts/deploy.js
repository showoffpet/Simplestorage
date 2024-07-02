const { ethers } = require("hardhat");
const verify = require("../utils/verify");

const deploy = async () => {
  try {
    const contractFactory = await ethers.getContractFactory("SimpleStorage");
    const SimpleStorage = await contractFactory.deploy();
    console.log("-----------deploying------------");
    console.log("Contract Address:", SimpleStorage.target);
    if(network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY){
      setTimeout(async () => {
        await verify(SimpleStorage.target)
      }, 45000);
    }
  } catch (error) {
    console.log(error.message);
  }
};

deploy();

module.exports = deploy;