import "./App.scss";
import {useConnect, useAccount, useContractRead, useEnsName, useDisconnect} from "wagmi";
import devsABI from "./models/devsABI/abi";
import TwitterList from "./components/TwitterList";

function App() {
    const { data: account } = useAccount();
    const { data: ensName } = useEnsName({ address: account?.address });
    const { connect, connectors, error, isConnecting, pendingConnector } = useConnect();
    const { disconnect } = useDisconnect();


    // const { data:nftHolder, error:readingContractError } = useContractRead({
    //     addressOrName: "0x25ed58c027921E14D86380eA2646E3a1B5C55A8b",
    //     contractInterface: devsABI
    // }, "balanceOf", {
    //     args: account?.address
    // });
    //
    // if (nftHolder?._hex === 0x01) {
    //     console.log("Owns D_D NFT");
    // } else {
    //     console.log("Does not own NFT");
    // }
    //
    // if (readingContractError) {
    //     console.log(readingContractError.message);
    // }


    if (account)  {
        return (
            <>
                <div>
                    <button
                        className="Connect-Button"
                        onClick={disconnect}
                    >
                        {ensName ? ensName : account.address}
                    </button>
                </div>
                <TwitterList/>
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
                <footer>
                    <p>Made with <span>❤</span> by <a href="https://twitter.com/iamtatara" target="_blank" rel="noopener noreferrer" className="brand-color">Tatara.eth</a></p>
                </footer>
            </div>
        );

}

export default App;
