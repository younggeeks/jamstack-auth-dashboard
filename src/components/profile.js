import React from "react";
import { Link } from "gatsby";

export default function Profile() {
  return (
    <div className="dashboard-header">
      <nav>
        <Link to="/dashboard/secret" activeClassName="active">
          Secret Stuff
        </Link>
        <Link to="/dashboard/base" activeClassName="active">
          See your Base
        </Link>
      </nav>

      <span>Show login status here</span>
    </div>
  );
}
