const { network, ethers } = require("hardhat");
const developmentChains = require("../utils/hardhat-helper");
const { expect, assert } = require("chai");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("SimpleStorage", async () => {
      let SimpleStorage;
      let user;

      beforeEach(async () => {
        const contractFactory = await ethers.getContractFactory("SimpleStorage");
        SimpleStorage = await contractFactory.deploy();
        [user] = await ethers.getSigners();
      });

      describe("Set Favourite Color", async () => {
        it("should output a favourite Color if set successfully", async () =>{
            await SimpleStorage.connect(user).setFavouriteColor("blue");
            const favColor = await SimpleStorage.getFavouriteColor();
            expect(favColor).to.be.equal("blue"); 
            console.log(favColor);           
        });
      });

      describe("Get Favourite Color",async () =>{
        beforeEach(async () => {
          await SimpleStorage.connect(user).setFavouriteColor("Red");
        });

        it("should get the favourite color with a user", async () => {
          const color = await SimpleStorage.getFavouriteColor();
          console.log(color);
          expect(color).to.be.a("string");
        });
      })
  });