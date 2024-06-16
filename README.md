# NFT Sample DApp

This repository contains the code for a sample decentralized application (DApp) that interacts with an NFT (Non-Fungible Token) contract.

## Structure

The repository is divided into three main parts:

1. `contracts/`: Contains the Solidity contract code for the NFT, as well as deployment and minting scripts.
2. `nft-dapp/`: Contains the code for the frontend DApp that interacts with the deployed NFT contract.
3. `nft721-subgraph/`: Contains the code for a subgraph using The Graph, which indexes blockchain data for easier access.

## Setup

### Contracts

Navigate to the `contracts/` directory. Install dependencies with `npm install`.

To compile the contract, run `npx hardhat compile`.

To deploy the contract, run `npx hardhat run scripts/deploy721.ts --network <network>`. Replace `<network>` with the name of the network you want to deploy to.

### DApp

Navigate to the `nft-dapp/` directory. Install dependencies with `npm install`.

To start the development server, run `npm run dev`.

### Subgraph

Navigate to the `nft721-subgraph/` directory. Install dependencies with `npm install`.

To generate the subgraph code, run `graph codegen`.

To build the subgraph, run `graph build`.

To authenticate with The Graph, run `graph auth --studio <YOUR_DEPLOY_KEY>`.

To deploy the subgraph, run `graph deploy --studio <YOUR_SUBGRAPH_NAME>`.

Replace `<YOUR_DEPLOY_KEY>` with your deployment key and `<YOUR_SUBGRAPH_NAME>` with the name of your subgraph.

## Usage

After setting up each part of the project, you can interact with the NFT contract through the DApp. The DApp provides a user interface for minting NFTs and viewing existing NFTs.

## Contract Address

The current contract address is `0x84311500058E4AA817f7b8C02f2Ea44f8cae2304` on Ethereum Sepolia Testnet. This may change if the contract is redeployed.

If you need further assistance or encounter any issues, please refer to the documentation or open an issue in this repository.
