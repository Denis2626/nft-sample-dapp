'use client';
import React from 'react';
import { Box, Heading, Flex, Spacer } from '@chakra-ui/react';
import NFTForm from '@/app/components/NftForm';

const Home = () => {
  return (
    <Box p={5}>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={6} backgroundColor={'gray.500'}>
        <Heading size="lg" color={'white'}>
          NFT Deployer 3
        </Heading>
        <Spacer />
        <Box>
          <w3m-button label="Connect" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
