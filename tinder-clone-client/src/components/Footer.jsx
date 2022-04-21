import React from 'react';
import { Link } from "react-router-dom";

import "../styles/footer.scss"

function Footer() {
    return (
        <div className="footer">
        <div className="actions row text-center">
          <div className="col-4 switch-link">
            <Link to="/like">
              <img src="smile.png" alt="smile" />
              &nbsp; Liked
            </Link>
          </div>
          <div className="col-4 switch-link">
            <Link to="/">
              <img src="heart.png" alt="heart" />
              &nbsp; Discover
            </Link>
          </div>
          <div className="col-4 switch-link">
            <Link to="/match">
              <img src="match.png" alt="match" />
              &nbsp; Match
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Footer;