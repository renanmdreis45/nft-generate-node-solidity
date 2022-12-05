require("dotenv").config();
const { ethers } = require("hardhat");

const contract = require("../artifacts/contracts/EmotionalShapes.sol/EmotionalShapes.json");
const contractInterface = contract.abi;

// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("goerli", {
  alchemy: process.env.DEV_API_URL,
});

// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

//https://docs.ethers.io/v5/api/contract/contract
const emotionalShapes = new ethers.Contract(
  "0x6fE7Cdf6Bc922E78534bCA12cDF4A6b30638b8f1",
  contractInterface,
  wallet
);

const main = () => {
  emotionalShapes
    .mint(process.env.PUBLIC_KEY)
    .then((transaction) => console.log(transaction))
    .catch((e) => console.log("something went wrong", e));
};

main();