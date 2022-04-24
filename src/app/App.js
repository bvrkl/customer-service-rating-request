import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Rating } from "../components/rating/Rating";
import { ThankYou } from "../components/thankYou/ThankYou";

export const App = () => {
  const [rating, setRating] = useState(null);
  const stateMaker = (element) => {
    if (element.getAttribute("id") === "one") {
      setRating(element.getAttribute("id"));
    } else if (element.getAttribute("id") === "two") {
      setRating(element.getAttribute("id"));
    } else if (element.getAttribute("id") === "three") {
      setRating(element.getAttribute("id"));
    } else if (element.getAttribute("id") === "four") {
      setRating(element.getAttribute("id"));
    } else if (element.getAttribute("id") === "five") {
      setRating(element.getAttribute("id"));
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Rating
              setRating={setRating}
              rating={rating}
              stateMaker={stateMaker}
            />
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};
