import React from "react";

import { ReactComponent as YourSvg } from "../../images/illustration-thank-you.svg";

import "./thankYou.css";

export const ThankYou = () => {
  let rating = null;

  if (window.localStorage.rating === "one") {
    rating = 1;
  } else if (window.localStorage.rating === "two") {
    rating = 2;
  } else if (window.localStorage.rating === "three") {
    rating = 3;
  } else if (window.localStorage.rating === "four") {
    rating = 4;
  } else if (window.localStorage.rating === "five") {
    rating = 5;
  }

  return (
    <div id="bigBox">
      <div id="boxTY">
        <div id="imgDivTY">
          <YourSvg
            onClick={(e) => {
              window.location.replace("/");
              return e.preventDefault;
            }}
          />
        </div>
        <div id="yourSelection">
          <p>You selected {rating} out of 5</p>
        </div>
        <div id="thankYou">
          <h1>Thank You!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};
