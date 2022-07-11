import React, { useContext, useEffect, useState } from "react";
import { youTubeOptions } from "../utils/options_fetch";
import axios from "axios";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos ";
import ExercisesContext from "../context/ExercisesContext";

export default function ExerciseDetail() {
 
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { exercise } = useContext(ExercisesContext);

  useEffect(() => {
    const getVideos = async () => {
      youTubeOptions.url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${exercise.name} exercise`;
      const res = await axios.request(youTubeOptions);
      setExerciseVideos(res.data.contents);
      return res.data;
    };
    getVideos();
       //eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exercise} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exercise.name} />
    </Box>
  );
}
