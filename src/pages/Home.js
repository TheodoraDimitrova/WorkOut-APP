import React, {  useState } from "react";
import { Box } from "@mui/material";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import {exercisesData} from '../utils/data'

function Home() {




  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises  />
    </Box>
  );
}

export default Home;
