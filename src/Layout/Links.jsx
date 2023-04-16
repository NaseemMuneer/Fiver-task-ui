import React from "react";

function Links() {
  return (
    <>
      {/* create a nav with 5 links change the active color  */}
      <div className="container nav-links-div">
        <div className="nav-links ">
          <ul className="float-right">
            <li className="btn">
              <a className="text-warning" href="">
                Profile
              </a>
            </li>
            <li className="btn">
              <a className="text-white " href="">
                Staking
              </a>
            </li>
            <li className="btn">
              <a className="text-white " href="">
                Badges
              </a>
            </li>
            <li className="btn">
              <a className="text-white " href="">
                Inventory
              </a>
            </li>
            <li className="btn">
              <a className="text-white " href="">
                Claim
              </a>
            </li>
            <li className="btn">
              <a className="text-white " href="">
                Avatar
              </a>
            </li>
            <li className="btn">
              <a className="text-white " href="">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Links;
