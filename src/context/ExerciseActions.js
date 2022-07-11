import axios from "axios";
import { options } from "../utils/options_fetch";




export const allExercises = async () => {
  options.url = `https://exercisedb.p.rapidapi.com/exercises`;
  const res = await axios.request(options);

  return res.data;
};

