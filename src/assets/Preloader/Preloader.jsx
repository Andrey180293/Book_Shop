import React from "react";
import "../Preloader/Preloader.css";

let Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__row">
        <div className="preloader__item"></div>
        <div className="preloader__item"></div>
      </div>
    </div>
  );
};
export default Preloader;
