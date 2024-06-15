// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { Web3ModalProvider } from './context/Web3Modal'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Web3ModalProvider>
        <ChakraProvider>
            {children}
        </ChakraProvider>
    </Web3ModalProvider>
  )
  }