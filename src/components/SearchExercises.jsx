import React, { useState, useContext } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import ExercisesContext from "../context/ExercisesContext";

export default function SearchExercises() {
  const { exercises, dispatch } = useContext(ExercisesContext);

  const [inputSearch, setInputSearch] = useState("");

  const HandleSearch = async () => {
    dispatch({ type: "SET_BODY_PART", payload: inputSearch });
    if (inputSearch) {
      let res = exercises.filter(
        (x) => x.bodyPart.includes(inputSearch) || x.name.includes(inputSearch)
      );

      dispatch({ type: "SEARCH_EXERCISES", payload: res });
      setInputSearch("");
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      mt="37px"
      p="20px"
      background="#FF4323"
    >
      <Typography
        fontWeight="700"
        sx={{
          fontSize: {
            lg: "44px",
            sx: "30px",
          },
          mb: "50px",
          textAlign: "center",
        }}
      >
        Awesome Exercises you <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          id="search-input"
          label="Search"
          sx={{
            input: { fontWeight: "300", border: "none", borderRadius: "3px" },
            width: { lg: "800px", xs: "350px" },
            background: "#fff",
            borderRadius: "40px",
          }}
          value={inputSearch}
          heght="76px"
          onChange={(e) => {
            setInputSearch(e.target.value.toLocaleLowerCase());
          }}
          placeholder="Search for exercises"
          type="text"
        />
        <Button
          onClick={HandleSearch}
          className="serch-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            position: "absolute",
            height: "56px",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%" }}>
        <HorizontalScrollbar />
      </Box>
    </Stack>
  );
}
