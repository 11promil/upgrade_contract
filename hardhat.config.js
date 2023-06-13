require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy');
// require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_NODE_URL = "OEdtHUzl0lgTajRCph4QyP0y_yCXWBd7"
const SEPOLIA_PRIVATE_KEY = "bf9b96e631321ee35ed001363a518bf0549709847e71283e6385ceb71bd72d83"
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_NODE_URL}`,
      accounts: [`${SEPOLIA_PRIVATE_KEY}`],
    },
  },
};
