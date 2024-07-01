const { ethers } = require("hardhat");

const setFavouriteColor = async () => {
  const [user] = await ethers.getSigners();
  try {
    console.log("-----------deploying------------");
    const contractFactory = await ethers.getContractFactory("SimpleStorage");
    const contract = await contractFactory.deploy();
    console.log("Contract Address:", contract.target);
    console.log("---------------------------------");
    console.log("--------setting Favourtite Color---------------");
    const favColor = await contract.connect(user).setFavouriteColor("Blue");
    console.log(favColor);
  } catch (error) {
    console.log(error.message);
  }
};

setFavouriteColor();

module.exports = setFavouriteColor;