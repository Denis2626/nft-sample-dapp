// apollo-client.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT; // Read the endpoint from an environment variable

const client = new ApolloClient({
    link: new HttpLink({
        uri: endpoint, // Use the endpoint from the environment variable
    }),
    cache: new InMemoryCache(),
});

export default client;
