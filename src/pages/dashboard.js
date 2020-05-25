import React, { useEffect } from "react";
import Layout from "../components/layout";
import Profile from "../components/profile";
import RouteSecret from "../components/route-secret";
import { Router } from "@reach/router";
import RouteBase from "../components/route-base";
import RouteLogin from "../components/route-login";
import { navigate } from "gatsby";

export default function Dashboard({ location }) {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, [location]);
  return (
    <Layout>
      <Profile />
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
        <RouteLogin path="/dashboard/login" />
      </Router>
    </Layout>
  );
}
