// components/NFTList.js
import { useQuery } from '@apollo/client';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { GET_NFTS } from '../queries';

function NFTList() {
  const { loading, error, data } = useQuery(GET_NFTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box>
      <Heading as="h2" size="xl" mb="4">NFT List</Heading>
      <VStack spacing={4} align="stretch">
        {data.nfts.map((nft:any) => (
          <Box key={nft.id} p="5" shadow="md" borderWidth="1px">
            <Text><strong>NFT ID:</strong> {nft.id}</Text>
            <Text><strong>Owner:</strong> {nft.owner}</Text>
            <Text><strong>Token URI:</strong> {nft.tokenURI}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default NFTList;
