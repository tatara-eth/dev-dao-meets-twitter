import "./App.scss";
import {useConnect, useAccount } from "wagmi";
import TwitterList from "./components/TwitterList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const { data: account } = useAccount();
    const { connect, connectors, error, isConnecting, pendingConnector } = useConnect();

    if (account?.address) {
        return (
            <>
              <Header address={account.address}/>
              <TwitterList address={account.address}/>
              <Footer/>
            </>
        );
    }

        return (
            <div className="App">
                <main>
                    <h1>D_D meets <span className="twitter-color">Twitter</span></h1>
                    <p>Follow other Developer DAO members on Twitter!</p>
                    <p>You must hold a <a href="https://opensea.io/collection/devs-for-revolution" rel="noopener noreferrer"
                                          target="_blank">D_D NFT</a> to use this website.</p>
                    {connectors.map((connector) => (
                        <button
                            className="Connect-Button"
                            disabled={!connector.ready}
                            key={connector.id}
                            onClick={() => connect(connector)}
                        >
                            Connect Wallet
                            {!connector.ready && ' (unsupported)'}
                            {isConnecting &&
                                connector.id === pendingConnector?.id &&
                                ' (connecting)'}
                        </button>
                    ))}

                    {error && <div>{error.message}</div>}
                </main>
                <Footer/>
            </div>
        );
}

export default App;
