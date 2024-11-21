import React from "react";
import "./Sidebar.css";

// images
import img1 from "../../../public/assets/vendor/icons/1.png";
import img2 from "../../../public/assets/vendor/icons/2.png";
import img3 from "../../../public/assets/vendor/icons/3.png";
import img4 from "../../../public/assets/vendor/icons/4.png";
import img5 from "../../../public/assets/vendor/icons/5.png";
import img6 from "../../../public/assets/vendor/icons/6.png";
import img7 from "../../../public/assets/vendor/icons/7.png";
import img8 from "../../../public/assets/vendor/icons/8.png";
import img9 from "../../../public/assets/vendor/icons/9.png";
import img10 from "../../../public/assets/vendor/icons/10.png";
import img11 from "../../../public/assets/vendor/icons/11.png";
import img12 from "../../../public/assets/vendor/icons/12.png";
import img13 from "../../../public/assets/vendor/icons/13.png";
import img14 from "../../../public/assets/vendor/icons/14.png";
import img15 from "../../../public/assets/vendor/icons/15.png";
import img16 from "../../../public/assets/vendor/icons/16.png";
import img17 from "../../../public/assets/vendor/icons/17.png";
import img18 from "../../../public/assets/vendor/icons/18.png";
import img19 from "../../../public/assets/vendor/icons/19.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const items = [
    {
      img: img1,
      location: "hewlett",
      name: "Hewlett Packard",
      bgColor: "#0096D6",
    },
    {
      img: img2,
      location: "microsoft",
      name: "Microsoft",
      bgColor: "#7FBA00",
    },
    {
      img: img3,
      location: "kaspersky",
      name: "Kaspersky",
      bgColor: "#016D5D",
    },
    {
      img: img4,
      location: "micro",
      name: "Trend Micro",
      bgColor: "#CB302B",
    },
    {
      img: img5,
      location: "aruba",
      name: "HPE Aruba Networking",
      bgColor: "#F5831F",
    },
    {
      img: img6,
      location: "sangoma",
      name: "Sangoma",
      bgColor: "#158FCF",
    },
    {
      img: img7,
      location: "oracle",
      name: "Oracle",
      bgColor: "#F80000",
    },
    {
      img: img8,
      location: "hbc",
      name: "H3C",
      bgColor: "#ED1C24",
    },
    {
      img: img9,
      location: "redhat",
      name: "Red Hat",
      bgColor: "#EE0000",
    },
    {
      img: img10,
      location: "veeam",
      name: "Veeam Software Holding",
      bgColor: "#00B336",
    },
    {
      img: img11,
      location: "f5",
      name: "F5",
      bgColor: "#E21D38",
    },
    {
      img: img12,
      location: "strke",
      name: "StrikeReady",
      bgColor: "#73C7AD",
    },
    {
      img: img13,
      location: "huawei",
      name: "Huawei Technologies",
      bgColor: "#ED1F29",
    },
    {
      img: img14,
      location: "rapid",
      name: "Rapid7",
      bgColor: "#E95823",
    },
    {
      img: img15,
      location: "panduit",
      name: "Panduit Corporation",
      bgColor: "#00B09A",
    },
    {
      img: img16,
      location: "sophos",
      name: "Sophos Ltd",
      bgColor: "#3062AE",
    },
    {
      img: img17,
      location: "citrix",
      name: "Citrix Systems",
      bgColor: "#000000",
    },
    {
      img: img18,
      location: "apc",
      name: "APC",
      bgColor: "#FF0000",
    },
    {
      img: img19,
      location: "veritas",
      name: "Veritas",
      bgColor: "#AA252B",
    },
  ];

  const location = useLocation();
  let currentLocation = location.pathname.split("/")[2];
  console.log(currentLocation);
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <Link
          to={`/vendors/${item.location}`}
          key={index}
          style={{ textDecoration: "none" }}
        >
          <div
            className="sidebar-item d-flex align-items-center justify-content-start"
            key={index}
            style={{
              backgroundColor:
                currentLocation === item.location ? item.bgColor : undefined,
            }}
          >
            <img src={item.img} width="48px" alt="" />
            <p
              style={{
                color:
                  currentLocation === item.location
                    ? "var(--white-color) !important"
                    : "var(--sidebar-color)",
              }}
            >
              {item.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
