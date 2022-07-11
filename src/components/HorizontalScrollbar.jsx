import React, { useState } from "react";
import { Box } from "@mui/material";
import ScrollbarCard from "./ScrollbarCard";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const HorizontalScrollbar = () => {
  const [categories] = useState([
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ]);
  return (
    <Carousel breakPoints={breakPoints}>
      {categories.map((item, key) => (
        <Box key={key} itemId={key} title={item} m="0 40px">
          <ScrollbarCard item={item} />
        </Box>
      ))}
    </Carousel>
  );
};

export default HorizontalScrollbar;
