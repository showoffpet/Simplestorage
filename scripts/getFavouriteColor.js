const { ethers } = require("hardhat");

const getFavouriteColor = async () => {
  let user;
  [user] = await ethers.getSigners();
  try {
    console.log("-----------deploying------------");
    const contractFactory = await ethers.getContractFactory("SimpleStorage");
    const contract = await contractFactory.deploy();
    console.log("Contract Address:", contract.target);
    console.log("---------------------------------");
    console.log("--------Setting Color---------------");
    await contract.connect(user).setFavouriteColor("Blue");
    const favColor = await contract.getFavouriteColor();
    console.log(favColor);
  } catch (error) {
    console.log(error.message);
  }
};
getFavouriteColor();

module.exports = getFavouriteColor;
