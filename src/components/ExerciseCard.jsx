import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

import ExercisesContext from "../context/ExercisesContext";

export default function ExerciseCard({ exercise }) {
  const { dispatch } = useContext(ExercisesContext);

  return (
    <Link
      className="exercise-card"
      to={`/exercise/${exercise.id}`}
      onClick={() => dispatch({ type: "SET_EXERCISE", payload: exercise })}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            mt: "20px",
            ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            mt: "20px",
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="31px"
        color="#000"
        fontWeight="bold"
        mt="24px"
        pb="24px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
}
