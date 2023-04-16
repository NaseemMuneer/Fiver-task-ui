import React from "react";
import CoverImage from "../../Assets/Images/cover.png";

function Profile() {
  return (
    <>
      <div>
        <div class="module-border-wrap">
          <div class="module">
            <div class="module-head">
              <div className="module-div">
                <img src={CoverImage} alt="" width={"100%"} />
              </div>
              <div className="profile-image-div">
                {/* <img src={ProfileImage} alt="" /> */}
              </div>
            </div>
            <div className="profile-info d-flex justify-content-between">
              <div className="mt-3">
                <div>
                  <span className="d-flex text-align-center gap-3">
                    <p>Artist Name :</p>
                    <p>Artist name here</p>
                  </span>
                </div>
                <div>
                  <span className="d-flex text-align-center gap-3">
                    <p>Social :</p>
                    <p>123 456 789</p>
                  </span>
                </div>
                <div>
                  <span className="d-flex text-align-center gap-3">
                    <p>Wallet address :</p>
                    <p>1258 1258 12288 1258</p>
                  </span>
                </div>
                <div>
                  <span className="d-flex text-align-center gap-3">
                    <p>Twitter :</p>
                    <p>@namehere</p>
                  </span>
                </div>
              </div>
              <div className="pt-5">
                <button className="btn btn-warning">Edit Artist</button>
                <button className="btn btn-warning mx-4">Mint NFT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
