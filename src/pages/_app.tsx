import type { AppProps } from "next/app";
import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import '@rainbow-me/rainbowkit/styles.css';

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    infuraProvider({ apiKey: 'https://mainnet.infura.io/v3/655dcda26fd949a295880de6a1f2940d' }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'simpledapp',
  projectId: '0',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}


