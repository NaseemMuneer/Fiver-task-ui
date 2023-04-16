import React from "react";
import Layout from "../../Layout/Index";
import Profile from "../Profile/Profile";
import NftCard from "../../Components/Card";
import Activity from "../../Components/Activity";
function Index() {
  return (
    <>
      <Layout>
        <Profile />

        <div className="d-flex ">
          {[1, 2, 3].map((item) => {
            return <NftCard />;
          })}
        </div>

        <div className="d-flex flex-column gap-3">
          {[1, 2, 3, 4].map((item) => {
            return <Activity />;
          })}
        </div>
      </Layout>
    </>
  );
}

export default Index;
