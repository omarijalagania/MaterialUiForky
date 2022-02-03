import React, { useState, useEffect } from "react";
import "./Banner.css";
import { useSelector } from "react-redux";
function Banner() {
  const [randomImage, setRandomImage] = useState({});
  const data = useSelector((state) => state.getData.result); //pull state from global store

  useEffect(() => {
    setRandomImage(data[Math.floor(Math.random() * data.length - 1)]);
  }, [data]);
  console.log(data);
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${randomImage?.image_url}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{randomImage?.title}</h1>
        <span>{randomImage?.publisher}</span>
      </div>
    </div>
  );
}

export default Banner;
