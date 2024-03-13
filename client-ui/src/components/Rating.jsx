import React from "react";
import { Star } from "../assets/images";

export default function Rating({ star, height = 18 }) {
  return (
    <span
      className={`block mr-1 h-[${height}px] bg-[length:${height}px_${height}px]`}
      style={{
        width: `${star * height}px`,
        backgroundImage: `url("${Star}")`,
        backgroundPositionX: "left",
        backgroundPositionY: "center",
        backgroundRepeat: "repeat-x",
      }}
    />
  );
}
