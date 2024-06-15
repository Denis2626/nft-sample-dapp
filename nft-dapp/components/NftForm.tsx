import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { Box, Text, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import NFT721 from '../contracts/NFT721.json';

const NftForm: React.FC = () => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [maxSupply, setMaxSupply] = useState('');
  const [tokenURI, setTokenURI] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const { address, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()

  useEffect(() => {
    if (!isConnected ||!walletProvider) return;
  }, [isConnected, walletProvider]);


  const handleDeploy = async () => {
    if (!isConnected || !walletProvider) throw new Error('User disconnected');
    console.log('Deployinng: ', name, symbol, maxSupply)
    const ethersProvider = await new ethers.BrowserProvider(walletProvider);
    console.log(JSON.stringify(ethersProvider))
    const signer = await ethersProvider.getSigner();
    console.log(signer)
    const factory = await new ethers.ContractFactory(NFT721.abi, NFT721.bytecode, signer);
    const contract = await factory.deploy(name, symbol, maxSupply);
    
    await contract.waitForDeployment();

    // const deployTx = await factory.getDeployTransaction(name, symbol, maxSupply);
    // console.log('tx:',deployTx)
    // const tx = await signer.sendTransaction(deployTx);
    // console.log(tx.toJSON())
    const ca = await contract.getAddress();
    setContractAddress(ca);
    alert(`Contract deployed to ${ca}`);
  };

  const handleMint = async () => {
    if (!isConnected || !walletProvider) throw Error('User disconnected')
    if (!contractAddress) throw Error('Contract address is required')
    const ethersProvider = new ethers.BrowserProvider(walletProvider)
    const signer = await ethersProvider.getSigner();
    const contract = new ethers.Contract(contractAddress, NFT721.abi, signer);
    const tx = await contract.safeMint(address, tokenURI); // address mints to self
    await tx.wait();

    alert(`Token minted: ${JSON.stringify(tx)}`);
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Text> Current Wallet: {address}</Text>
      <VStack spacing={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="symbol">
          <FormLabel>Symbol</FormLabel>
          <Input value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        </FormControl>
        <FormControl id="maxSupply">
          <FormLabel>Max Supply</FormLabel>
          <Input value={maxSupply} onChange={(e) => setMaxSupply(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleDeploy}>
          Deploy Contract
        </Button>
        <FormControl id="tokenURI">
          <FormLabel>Contract address</FormLabel>
          <Input value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} />
          <FormLabel>Token URI</FormLabel>
          <Input value={tokenURI} onChange={(e) => setTokenURI(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleMint}>
          Mint Token
        </Button>
      </VStack>
    </Box>
  );
};

export default NftForm;
