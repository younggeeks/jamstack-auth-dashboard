import React from "react";
import { Link } from "gatsby";

import "./layout.css";
import { IdentityContextProvider } from "react-netlify-identity";

const Layout = ({ children }) => {
  return (
    <IdentityContextProvider url="https://jamsam-auth.netlify.app">
      <header>
        <Link to="/">Jamstack App</Link>J
      </header>

      <main>{children}</main>
    </IdentityContextProvider>
  );
};

export default Layout;
