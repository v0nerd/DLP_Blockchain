require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    development: {
      url: "http://127.0.0.1:8545",
      accounts: [process.env.PRIVATE_KEY] // Use any account from Ganache
    }
  }
};
