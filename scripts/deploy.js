require("dotenv").config();
const { create } = require("ipfs-http-client");
const hre = require("hardhat");

const ipfs = create({ url: "http://localhost:5001" }); // IPFS local node

async function main() {
    const DLPProtection = await hre.ethers.getContractFactory("DLPProtection");
    const dlpProtection = await DLPProtection.deploy();
    await dlpProtection.deployed();

    console.log("DLPProtection deployed to:", dlpProtection.address);

    // Example of storing data
    const data = "Sensitive Information";

    const { path } = await ipfs.add(data);
    console.log("IPFS Hash:", path);

    // Store the IPFS hash in the contract
    await dlpProtection.storeData(1, path);
    console.log("Data stored in contract with ID 1");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });