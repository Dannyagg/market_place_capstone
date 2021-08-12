import classes from "../components/Home.module.css";
import React from "react";
import Buildings from "./video/Buildings.mp4";

function HomePage() {
  return (
    <div>
      <video
        className={classes.videoTag}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          hight: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Buildings} type="video/mp4" />
      </video>
      {/* <div>
        <h2 className={classes.statement}>Statement</h2>
      </div> */}
    </div>
  );
}

export default HomePage;
