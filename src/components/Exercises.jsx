import React, { useEffect, useState, useContext } from "react";
import { Box, Stack, Typography, Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";
import ExercisesContext from "../context/ExercisesContext";
import { allExercises } from "../context/ExerciseActions";

export default function Exercises() {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const { exercises, dispatch, bodyPart, exercisesResult } =
    useContext(ExercisesContext);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercisesResult.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const getExercises = async () => {
      const exerciseData = await allExercises();
      dispatch({ type: "ALL_EXERCISES", payload: exerciseData });
    };

    if (bodyPart === "all") {
      getExercises();
    } else {
      let res = exercises.filter(
        (x) => x.bodyPart.includes(bodyPart) || x.name.includes(bodyPart)
      );
      dispatch({ type: "SEARCH_EXERCISES", payload: res });
    }
    //eslint-disable-next-line
  }, [bodyPart]);

  if (!currentExercises.length) return <Loader />;
  return (
    <Box id="exercises" mt="50px" p="20px" sx={{ mt: { lg: "110px" } }}>
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}></ExerciseCard>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercisesResult.length > 6 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercisesResult.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}
