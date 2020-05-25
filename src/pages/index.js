import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => {
  return (
    <Layout>
      <h1>This is an awesome app </h1>;<p>GEt in to find out why</p>
      <Link to="/dashboard">Go to dashboard</Link>
    </Layout>
  );
};
