import "./TwitterList.scss";
import { useContractRead } from "wagmi";
import devsABI from "../models/devsABI/abi";

/*
 This component renders out a list of D_D members and their Twitter links.
 */



const TwitterList = (props) => {
    const { data } = useContractRead({
        addressOrName: "0x25ed58c027921E14D86380eA2646E3a1B5C55A8b",
        contractInterface: devsABI
    }, "balanceOf", {
        args: props.address
    });

    console.log(data);

    if (data._hex === "0x01") {
        return (
            <div className="container">
                <div className="twitter-list">
                    <div className="twitter-list-header">
                        <h1>D_D Members</h1>
                        <button className="button-add">+ Add myself</button>
                    </div>
                    <div className="profile-list">
                        <div className="profile">
                            <img src="https://pbs.twimg.com/profile_images/1528247870289158145/smB6So9H_400x400.jpg" alt="Dev #1538"/>
                            <div className="profile-details">
                                <h3>Tatara.eth/.lens</h3>
                                <p>@iamtatara</p>
                            </div>
                            <button className="button-follow">Follow Dev #1538</button>
                        </div>
                    </div>
                </div>
                <div className="action-buttons">
                    {/*<p>Not on the list?</p>*/}
                    {/*<button className="button-add">Add Myself</button>*/}
                    {/*<button className="button-remove">Remove Myself</button>*/}
                </div>
            </div>
        );
    } else if (data._hex === "0x00") {
        return (
            <>
                <h1>D_D meets <span className="twitter-color">Twitter</span></h1>
                <p>You do not hold a D_D NFT</p>
                <p>You must hold a <a href="https://opensea.io/collection/devs-for-revolution" rel="noopener noreferrer"
                                      target="_blank">D_D NFT</a> to use this website.</p>
            </>
        );
    }
};

export default TwitterList;