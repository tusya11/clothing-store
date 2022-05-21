import React from "react";
import StarIcon from "../../images/Rating/StarIcon.svg";
import StarBorderIcon from "../../images/Rating/StarBorderIcon.svg";
import StarHalfIcon from "../../images/Rating/StarHalfIcon.svg";

export const Rating = ({ rating }) => {
  const max = 5;
  const starIcons = [StarIcon, StarHalfIcon, StarBorderIcon];

  const allStars = [];
  const roundRating = Math.round(rating * 2) / 2;
  const fullStar = Math.floor(roundRating);
  const emptyStar = max - Math.ceil(roundRating);

  for (let i = 0; i < fullStar; i++) {
    allStars.push(starIcons[0]);
  }
  if (fullStar < roundRating) {
    allStars.push(starIcons[1]);
  }
  for (let i = 0; i < emptyStar; i++) {
    allStars.push(starIcons[2]);
  }

  return (
    <div style={{ display: "flex", alignItems: "flexEnd" }}>
      {allStars.map((value, index) => (
        <img src={value} alt="logo" key={index} style={{ color: "orange" }} />
      ))}
    </div>
  );
};
