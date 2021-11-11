import React from "react";
import CardEvent from "../components/CardEvent";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import { dataImage } from "../data/dataImage";

const Dashboard = () => {
  return (
    <Layout page={"Dashboard"} login={true}>
      <Jumbotron dataImage={dataImage} />
      <CardEvent />
    </Layout>
  );
};

export default Dashboard;
