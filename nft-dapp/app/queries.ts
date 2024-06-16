// queries.js
import { gql } from '@apollo/client';

export const GET_NFTS = gql`
  query GetNFTs {
    nfts(last: 5) {
      id
      owner
      tokenURI
    }
  }
`;
