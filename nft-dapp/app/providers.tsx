// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { Web3ModalProvider } from './contexts/Web3Modal'
import { ApolloProvider } from '@apollo/client';
import client from './contexts/ApolloClient'

export function Providers({ children }: { children: React.ReactNode }) {
  return (

    <Web3ModalProvider>
          <ApolloProvider client={client}>
        <ChakraProvider>
            {children}
        </ChakraProvider>
        </ApolloProvider>
    </Web3ModalProvider>

  )
  }