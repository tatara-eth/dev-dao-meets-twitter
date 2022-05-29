import "../TwitterList.scss";

/*
 This component renders out a list of D_D members and their Twitter links.
 */
const TwitterList = () => {
    return (
        <div className="container">
            <h1>D_D Members</h1>
            <div className="twitter-list">
                <div className="profile">
                    <img src="https://pbs.twimg.com/profile_images/1528247870289158145/smB6So9H_400x400.jpg" alt="Dev #1538"/>
                    <div className="profile-details">
                        <h3>Tatara.eth/.lens</h3>
                        <p>@iamtatara</p>
                    </div>
                    <button className="button-follow">Follow Dev #1538</button>
                </div>
            </div>
            <div className="action-buttons">
                {/*<p>Not on the list?</p>*/}
                {/*<button className="button-add">Add Myself</button>*/}
                <button className="button-remove">Remove Myself</button>
            </div>
        </div>
    );
};

export default TwitterList;