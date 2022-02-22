import React from "react";
import moment from "moment";
import "./rides.style.css";

const RideList = ({
  id,
  map_url,
  origin_station_code,
  station_path,
  destination_station_code,
  date,
}) => (
  <div className="ride-list">
    <div>
      <img src={map_url} />
    </div>
    <div>
      <p>Ride Id: {id}</p>
      <p>Origin Station: {origin_station_code}</p>
      <p>Station Path: {station_path}</p>
      <p>Date: {moment(date).format("MMMM Do YYYY, h:mm:ss a")}</p>
      <p>Distance: {destination_station_code}</p>
    </div>
    <div className="city_state">
      <div>
        <button className="city_name_btn">City Name</button>
      </div>
      <div>
        <button className="state_name_btn">State Name</button>
      </div>
    </div>
  </div>
);

export default RideList;
