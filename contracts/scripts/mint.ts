import { ethers } from "ethers";
import * as dotenv from "dotenv";
import * as MyTokenJSON from "../artifacts/contracts/Nft721.sol/NFT721.json";

dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

  const contractAddress = "0x9d0fD5771635A819B9c251F12F763485F63E959b"; // Update this with your deployed contract address
  const myToken = new ethers.Contract(contractAddress, MyTokenJSON.abi, wallet);

  const to = await wallet.getAddress() // Replace with the address of the recipient
  const tokenURI = "https://examplenftm1int.com/metadata.json"; // Replace with the token URI

  const tx = await myToken.safeMint(to, tokenURI);
  await tx.wait();

  console.log(`Minted NFT with URI: ${tokenURI} to address: ${to}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
