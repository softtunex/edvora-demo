import React from "react";
import "./ride-activity.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const RideActivity = () => (
  <div className="ride-activity">
    <div className="ride">
      <div className="ride-activity-list">
        <ul>
          <li>
            <Link className="ridelink" to="/">
              Nearest rides
            </Link>
          </li>
          <li>
            <Link className="ridelink" to="/upcoming">
              Upcoming rides
            </Link>
          </li>
          <li>
            <Link className="ridelink" to="/past">
              Past rides
            </Link>
          </li>
        </ul>
      </div>
      <div className="filter">
        {/* <FontAwesomeIcon icon="fa-solid fa-arrow-down-wide-short" /> */}
        <p>Filters</p>
      </div>
    </div>
  </div>
);
export default RideActivity;
