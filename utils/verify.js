const { run } = require("hardhat")

const verify = async(ContractAddress) => {
    try{
        await run("verify", {
            address: ContractAddress,
        });
    }
    catch(error) {
        console.log(error.message);
    }
};

module.exports = verify