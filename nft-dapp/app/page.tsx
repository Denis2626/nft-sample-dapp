'use client';
import React from 'react';
import { Box, Heading, Flex, Spacer } from '@chakra-ui/react';
import NftForm from './components/NftForm';
import NFTList from './components/NftList';

const Home = () => {
  return (
    <Box p={5}>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={6} backgroundColor={'black'}>
        <Heading size="lg" color={'white'}>
          NFT Deployer
        </Heading>
        <Spacer />
        <w3m-button />
        <Box>
        </Box>
      </Flex>
      <NftForm />
      <NFTList />
    </Box>
  );
};

export default Home;
