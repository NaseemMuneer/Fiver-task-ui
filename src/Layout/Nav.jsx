import React from "react";
import Scroller from "../Assets/Images/scroller.png";
import Pattern1 from "../Assets/Images/pattern1.png";
import Pattern2 from "../Assets/Images/pattern2.png";
import Pattern3 from "../Assets/Images/pattern3.png";
import Pattern4 from "../Assets/Images/pattern4.png";
import Links from "./Links";

function Nav(props) {
  return (
    <>
      <div className="container-fluid hero-container">
        <div className="row p-4">
          <div className="col-12">
            <img src={Scroller} alt="" width={"100%"} />
            <div className="container border-container">
              <div className="scroller ">
                <div className="top-pattern container d-flex justify-content-between">
                  <img src={Pattern1} alt="" />
                  <img src={Pattern2} alt="" />
                </div>

                {/* // create header links  */}
                <div className="container">
                  <div className="row">
                    <div className="naseem">
                      <div className="links ">
                        <ul className="float-right">
                          <li className="btn btn-warning">
                            <a className="text-dark " href="testnetwork">
                              Test Network
                            </a>
                          </li>
                          <li className="btn btn-warning">
                            <a className="text-dark" href="testnetwork">
                              Test Network
                            </a>
                          </li>
                          <li className="btn btn-warning">
                            {/* drop down  */}
                            <div className="dropdown">
                              <button
                                className="btn btn-warning dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Test Network
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <a className="dropdown-item" href="opt1">
                                  Action
                                </a>
                                <a className="dropdown-item" href="opt2">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="opt3">
                                  here is another action
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="under_line"></div>
                      </div>

                      {/* Links tabs here  */}
                      <Links />
                    </div>
                  </div>
                </div>

                {props.children}

                <div className="top-pattern container d-flex justify-content-between">
                  <img src={Pattern3} alt="" />
                  <img src={Pattern4} alt="" />
                </div>
              </div>
            </div>
            <img src={Scroller} alt="" width={"100%"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
