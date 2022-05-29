import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import {createClient, WagmiConfig} from "wagmi";
import {chain} from "wagmi";
import {MetaMaskConnector} from "wagmi/connectors/metaMask";
import {configureChains} from "wagmi";
import {alchemyProvider} from "wagmi/providers/alchemy";
import {publicProvider} from "wagmi/providers/public";


const alchemyId = process.env.REACT_APP_ALCHEMY_ID;

const {chains, provider} = configureChains(
    [chain.mainnet, chain.goerli],
    [
        alchemyProvider({alchemyId}),
        publicProvider()
    ]
);

const connectors = [
    new MetaMaskConnector({chains})
];

const client = createClient({
    autoConnect: true,
    connectors,
    provider
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <WagmiConfig client={client}>
            <App/>
        </WagmiConfig>
    </React.StrictMode>
);