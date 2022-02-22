import React from "react";
import RideList from "../rides/rides.component";
import image from "../../assets/images/img.png";
import RideActivity from "../rideactivity/ride-activity.component";
import Navbar from "../navbar/navbar.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      ride: [
        {
          id: 535,
          origin_station_code: 7,
          station_path: [49, 55, 61, 72, 88],
          destination_station_code: 94,
          date: "12/22/2021 02:56 PM",
          map_url: image,
          state: "Arunachal Pradesh",
          city: "Naharlagun",
        },
        {
          id: 719,
          origin_station_code: 19,
          station_path: [32, 43, 53, 63, 77, 87],
          destination_station_code: 96,
          date: "01/22/2022 01:54 AM",
          map_url: image,
          state: "Arunachal Pradesh",
          city: "Naharlagun",
        },
        {
          id: 667,
          origin_station_code: 3,
          station_path: [53, 63, 79, 84],
          destination_station_code: 91,
          date: "02/08/2022 08:20 AM",
          map_url: image,
          state: "Puducherry",
          city: "Yanam",
        },
        {
          id: 766,
          origin_station_code: 18,
          station_path: [59, 60, 71, 88],
          destination_station_code: 97,
          date: "03/02/2022 11:30 AM",
          map_url: image,
          state: "Punjab",
          city: "Zirakpur",
        },
        {
          id: 437,
          origin_station_code: 1,
          station_path: [37, 42, 53, 61, 76, 80],
          destination_station_code: 91,
          date: "02/20/2022 08:24 PM",
          map_url: image,
          state: "Tripura",
          city: "Dharmanagar",
        },
        {
          id: 258,
          origin_station_code: 1,
          station_path: [29, 35, 46, 52, 60, 74, 84],
          destination_station_code: 90,
          date: "12/16/2021 02:23 PM",
          map_url: image,
          state: "Rajasthan",
          city: "Jaipur",
        },
        {
          id: 911,
          origin_station_code: 18,
          station_path: [21, 36, 40, 57, 60, 72, 84],
          destination_station_code: 99,
          date: "01/19/2022 07:26 AM",
          map_url: image,
          state: "Puducherry",
          city: "Mahe",
        },
        {
          id: 636,
          origin_station_code: 11,
          station_path: [37, 41, 54, 64, 76, 86],
          destination_station_code: 91,
          date: "12/23/2021 12:45 PM",
          map_url: image,
          state: "Arunachal Pradesh",
          city: "Naharlagun",
        },
        {
          id: 839,
          origin_station_code: 7,
          station_path: [25, 30, 48, 52, 61, 73, 89],
          destination_station_code: 97,
          date: "01/17/2022 07:30 PM",
          map_url: image,
          state: "Manipur",
          city: "Mayang Imphal",
        },
        {
          id: 559,
          origin_station_code: 18,
          station_path: [25, 35, 47, 58, 61, 78, 89],
          destination_station_code: 94,
          date: "02/26/2022 11:51 PM",
          map_url: image,
          state: "West Bengal",
          city: "Nabadwip",
        },
        {
          id: 249,
          origin_station_code: 2,
          station_path: [54, 63, 74, 87],
          destination_station_code: 99,
          date: "02/12/2022 04:58 PM",
          map_url: image,
          state: "Mizoram",
          city: "Saiha",
        },
        {
          id: 588,
          origin_station_code: 2,
          station_path: [56, 63, 79, 88],
          destination_station_code: 93,
          date: "12/12/2021 11:18 PM",
          map_url: image,
          state: "Himachal Pradesh",
          city: "Solan",
        },
        {
          id: 666,
          origin_station_code: 15,
          station_path: [29, 39, 43, 59, 65, 74, 86],
          destination_station_code: 90,
          date: "01/28/2022 01:32 PM",
          map_url: image,
          state: "Jharkhand",
          city: "Saunda",
        },
        {
          id: 666,
          origin_station_code: 6,
          station_path: [38, 47, 51, 64, 75, 86],
          destination_station_code: 94,
          date: "01/04/2022 02:27 PM",
          map_url: image,
          state: "Kerala",
          city: "Neyyattinkara",
        },
        {
          id: 819,
          origin_station_code: 8,
          station_path: [52, 65, 72, 86],
          destination_station_code: 91,
          date: "02/21/2022 12:41 AM",
          map_url: image,
          state: "Maharashtra",
          city: "Malkapur",
        },
        {
          id: 462,
          origin_station_code: 5,
          station_path: [61, 79, 89],
          destination_station_code: 99,
          date: "12/27/2021 08:45 PM",
          map_url: image,
          state: "Meghalaya",
          city: "Nongstoin",
        },
        {
          id: 129,
          origin_station_code: 10,
          station_path: [68, 78, 80],
          destination_station_code: 91,
          date: "12/20/2021 08:04 AM",
          map_url: image,
          state: "Maharashtra",
          city: "Savner",
        },
        {
          id: 215,
          origin_station_code: 10,
          station_path: [32, 40, 54, 61, 70, 89],
          destination_station_code: 98,
          date: "12/12/2021 07:42 PM",
          map_url: image,
          state: "Uttar Pradesh",
          city: "Jhansi",
        },
        {
          id: 689,
          origin_station_code: 2,
          station_path: [62, 79, 83],
          destination_station_code: 91,
          date: "01/13/2022 10:51 PM",
          map_url: image,
          state: "Uttar Pradesh",
          city: "Noida",
        },
        {
          id: 292,
          origin_station_code: 5,
          station_path: [33, 40, 57, 64, 71, 89],
          destination_station_code: 92,
          date: "01/11/2022 05:26 PM",
          map_url: image,
          state: "Manipur",
          city: "Mayang Imphal",
        },
        {
          id: 131,
          origin_station_code: 3,
          station_path: [36, 41, 59, 67, 74, 89],
          destination_station_code: 92,
          date: "01/18/2022 03:33 AM",
          map_url: image,
          state: "Uttar Pradesh",
          city: "Renukoot",
        },
        {
          id: 519,
          origin_station_code: 4,
          station_path: [37, 47, 58, 60, 79, 81],
          destination_station_code: 99,
          date: "01/13/2022 05:13 AM",
          map_url: image,
          state: "Odisha",
          city: "Pattamundai",
        },
        {
          id: 921,
          origin_station_code: 16,
          station_path: [41, 51, 62, 76, 81],
          destination_station_code: 98,
          date: "02/03/2022 06:33 PM",
          map_url: image,
          state: "Odisha",
          city: "Dhenkanal",
        },
        {
          id: 433,
          origin_station_code: 9,
          station_path: [63, 70, 87],
          destination_station_code: 91,
          date: "02/17/2022 02:25 AM",
          map_url: image,
          state: "Nagaland",
          city: "Mokokchung",
        },
      ],
      user: {
        station_code: 40,
        name: "Dhruv Singh",
        profile_key: "url",
      },
    };
  }

  render() {
    return (
      <div className="directory-menu">
        <Navbar key={this.state.user.profile_key} name={this.state.user.name} />

        <RideActivity />
        {this.state.ride
          .filter((x) => x)
          .map(
            ({
              origin_station_code,
              station_path,
              id,
              destination_station_code,
              map_url,
              date,
            }) => (
              <RideList
                key={id}
                origin_station_code={origin_station_code}
                station_path={station_path}
                destination_station_code={destination_station_code}
                map_url={map_url}
                id={id}
                date={date}
              />
            )
          )}
      </div>
    );
  }
}
export default Directory;
