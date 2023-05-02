
// import portfoliolist from "../portfoliolist/Portfoliolist";
// import { useState } from "react";
import {useEffect,useState} from "react";
import Fefalist from "../fefalist/Fefalist"
import "./portfolio.scss";

export default function Portfolio() {

  const [selected,setselected]=useState("featured");
  const list = [
    {
      id:"featured",
      title:"Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile"
      ,title: "Mobile",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    }
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>

      {list.map((item) => (
        <Fefalist title={item.title} active={selected === item.id} 
        setselected={setselected} id={item.id}/>

        ))}

      </ul>
      <div className="container">
      <div className="item">
      <img src="assets/teck3.jpg" alt="" />
      <h3>Banking App</h3>
      </div>
      <div className="item">
      <img src="assets/teck3.jpg" alt="" />
      <h3>Banking App</h3>
      </div>
      <div className="item">
      <img src="assets/teck3.jpg" alt="" />
      <h3>Banking App</h3>
      </div>
      <div className="item">
      <img src="assets/teck3.jpg" alt="" />
      <h3>Banking App</h3>
      </div>
      <div className="item">
      <img src="assets/teck3.jpg" alt="" />
      <h3>Banking App</h3>
      </div>
      <div className="item">
      <img src="assets/teck3.jpg" alt="" />
      <h3>Banking App</h3>
      </div>


      </div>
    </div>
  );
}

