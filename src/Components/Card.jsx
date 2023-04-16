import React from "react";
import CardLayer from "../Assets/Icons/cardLayout.png";

function CArd() {
  return (
    <>
      {/* //create a card using picture , name, description, price input, and button  */}
      <div className="card card-div w-25 mt-5 mb-5 ">
        <div className="image-border">
          <img src={CardLayer} className="card-img-top " alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">@gmail.com here</p>
          <span className="d-flex ">
            <p>Price</p>
            <input type="text" className="bg-transparent border text-white" />
          </span>
          <button className="btn btn-warning w-100">Update price</button>
        </div>
      </div>
    </>
  );
}

export default CArd;
