# DLP Bittensor Integration

## Introduction
Nowadays DLP(Data Loss Prevention) technology is becoming a rising one, then it would be essential to implement it to the project. This project aims to integrate DLP concepts with IPFS and smart contracts using Hardhat. This project includes the project structure, full code examples, and step-by-step implementation.

## Set Up the Environment

```
   PRIVATE_KEY=your_ganache_account_private_key
```

Replace `your_ganache_account_private_key` with the private key of one of the Ganache accounts.

## Runnig the Project

#### Step 1: Start Ganache

1. **Start Ganache-CLI**:
   Open a new terminal window and start Ganache-CLI:
   ```bash
   ganache-cli
   ```
   This will start a local Ethereum blockchain.

2. **Run IPFS**: 
   You can run a local IPFS node using:
   ```bash
   ipfs daemon
   ```
   Make sure IPFS is installed on your machine. If not, you can install it following the instructions from the [IPFS documentation](https://docs.ipfs.io/guides/install/).

#### Step 2: Compile and Test Your Contracts

1. **Compile the Contracts**:
   In your project directory, run:
   ```bash
   npx hardhat compile
   ```

2. **Run the Tests**:
   After ensuring Ganache-CLI and IPFS are running, execute:
   ```bash
   npx hardhat test
   ```

   This command will run the tests you created in `DLPProtection.test.js`.

#### Step 3: Deploy to Ganache

1. **Deploy the Contract**:
   Run the deployment script with:
   ```bash
   npx hardhat run scripts/deploy.js --network development
   ```

   This will deploy the `DLPProtection` contract to your local Ganache instance.

### Summary

You now have a complete project that integrates DLP concepts with IPFS and smart contracts using Hardhat. The project structure includes contracts for DLP protection, a deployment script, and tests to ensure functionality. You can add more features or modify the existing ones as needed.


# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
