import React, { useState } from 'react';
import { ethers } from 'ethers';
import { Box, Button, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react';
import  NFT721 from '../contracts/NFT721.json';
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'

const NFTForm = () => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [maxSupply, setMaxSupply] = useState<number | string>('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { chainId, address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider()


  const deployContract = async () => {
    if (!isConnected) {
      setMessage('Please connect your wallet');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      // Create WalletConnect Provider
      const provider = new ethers.BrowserProvider(walletProvider!);

      // Get signer
      const signer = await provider.getSigner();

      // Define the contract factory
      const factory = new ethers.ContractFactory(NFT721.abi, NFT721.bytecode, signer);

      // Deploy the contract with constructor arguments
      const contract = await factory.deploy(name, symbol, maxSupply);

      // Wait for the transaction to be mined
      await contract.waitForDeployment();

      setMessage(`Contract deployed at address: ${await contract.getAddress()}`);
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box width="400px" mx="auto" mt="10">
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Symbol</FormLabel>
          <Input value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Max Supply</FormLabel>
          <Input value={maxSupply} type="number" onChange={(e) => setMaxSupply(e.target.value)} />
        </FormControl>
        <Button onClick={deployContract} isLoading={loading} colorScheme="blue">
          Deploy Contract
        </Button>
        {message && <Text>{message}</Text>}
      </Stack>
    </Box>
  );
};

export default NFTForm;
