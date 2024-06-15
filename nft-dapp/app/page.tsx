'use client';
import React from 'react';
import { Box, Heading, Flex, Spacer } from '@chakra-ui/react';
import NftForm from '../components/NftForm';

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

    </Box>
  );
};

export default Home;
