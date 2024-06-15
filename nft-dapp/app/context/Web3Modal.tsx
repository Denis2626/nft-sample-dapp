'use client';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'
import { ReactNode } from 'react';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || '';

const sepolia = {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://1rpc.io/sepolia'
  }

// TODO: Add metadata
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'http://localhost:3000/',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const ethersConfig = defaultConfig({
    /*Required*/
    metadata,
  
    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
  })
  
  // 5. Create a Web3Modal instance
  createWeb3Modal({
    ethersConfig,
    chains: [sepolia],
    projectId,
  })


export function Web3ModalProvider({ children }: { children: ReactNode }) {
    return children
}
