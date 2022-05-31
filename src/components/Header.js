import "./Header.scss";
import { useEnsName, useDisconnect } from "wagmi";

const Header = (props) => {
    const { disconnect } = useDisconnect();
    const { data: ensName } = useEnsName({ address: props.address });

    return (
        <nav className="Wallet-Connected">
            <h1>D_D meets <span className="twitter-color">Twitter</span></h1>
            <button
                className="Connect-Button"
                onClick={disconnect}
            >
                {ensName ? ensName : props.address}
            </button>
        </nav>
    );
};

export default Header;