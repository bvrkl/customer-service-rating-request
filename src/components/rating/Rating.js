import React, { useEffect } from "react";

import { ReactComponent as YourSvg } from "./../../images/icon-star.svg";

import "./rating.css";

export const Rating = (props) => {
  const { rating, setRating, stateMaker } = props;

  useEffect(() => {
    setRating(window.localStorage.getItem("rating"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("rating", rating);
  }, [rating]);

  const circleClick = (element) => {
    const circles = document.querySelectorAll(".circle");

    circles.forEach((div) => {
      div.classList.remove("active");
    });

    element.target.classList.add("active");

    stateMaker(element.target);
  };

  return (
    <div id="bigBox">
      <div id="box">
        <div id="imgDiv" className="circle">
          <YourSvg />
        </div>
        <div id="HDWD">
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with our support request. All feedback
            is appreciated to help us improve our offering!
          </p>
        </div>
        <div id="form">
          <div id="circles">
            <div
              className="circle"
              id="one"
              onClick={(element) => {
                circleClick(element);
              }}
            >
              1
            </div>
            <div
              className="circle"
              id="two"
              onClick={(element) => {
                circleClick(element);
              }}
            >
              2
            </div>
            <div
              className="circle"
              id="three"
              onClick={(element) => {
                circleClick(element);
              }}
            >
              3
            </div>
            <div
              className="circle"
              id="four"
              onClick={(element) => {
                circleClick(element);
              }}
            >
              4
            </div>
            <div
              className="circle"
              id="five"
              onClick={(element) => {
                circleClick(element);
              }}
            >
              5
            </div>
          </div>
          <div id="submit">
            <button
              onClick={(e) => {
                window.location.replace("/thank-you");
                return e.preventDefault;
              }}
            >
              S U B M I T
            </button>
          </div>
        </div>
      </div>
      <div className="circle hidden active"></div>
    </div>
  );
};
