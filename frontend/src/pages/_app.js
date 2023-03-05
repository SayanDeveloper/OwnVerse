import { ChakraProvider } from "@chakra-ui/react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, bscTestnet, optimism, polygon, polygonMumbai, goerli } from "wagmi/chains";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [goerli, polygon, bscTestnet, polygonMumbai, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: "IFTdS-HwrT3eufcbPA5nvfm9iVfnMq7j" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "OwnVerse",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  });
  return (
    <ChakraProvider>
      {ready ? (
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider coolMode chains={chains} theme={darkTheme()}>
              <Navbar />
              <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      ) : null}
    </ChakraProvider>
  );
};