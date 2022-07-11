import React ,{useContext}from "react";
import { Stack, Typography } from "@mui/material";
import { IoFitnessSharp } from "react-icons/io5";
import ExercisesContext from "../context/ExercisesContext";


export default function ScrollbarCard({ item }) {
  const { dispatch ,bodyPart } = useContext(ExercisesContext);
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        background: "#ffdd7d",
        width: "270px",
        height: "280px",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "27px",
      }}
      onClick={() => {
        dispatch({type:'SET_BODY_PART',payload:item});
        window.scrollTo({ top: 1800, behavior: "smooth", left: "100" });
      }}
    >
      <IoFitnessSharp size={100} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
}
