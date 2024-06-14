import { ethers } from "ethers";
import * as dotenv from "dotenv";
import * as MyTokenJSON from "../artifacts/contracts/Nft721.sol/NFT721.json";

dotenv.config();

async function main() {
  // Connect to the provider
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

  // Create a wallet instance
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

  // Display the wallet's balance
  const balance = await provider.getBalance(await wallet.getAddress());
  console.log("Deploying contracts with the account:", wallet.address);
  console.log("Account balance:", ethers.formatEther(balance), "ETH");

  // Create a contract factory for MyToken
  const MyTokenFactory = new ethers.ContractFactory(
    MyTokenJSON.abi,
    MyTokenJSON.bytecode,
    wallet
  );

  // Deploy the contract
  const myToken = await MyTokenFactory.deploy(wallet.address);

  // Wait for the contract to be deployed
  await myToken.waitForDeployment();

  // Display the contract address
  console.log("MyToken deployed to:", await myToken.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
