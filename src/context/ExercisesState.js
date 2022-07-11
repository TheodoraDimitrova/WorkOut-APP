import React, { useReducer } from "react";

import ExercisesContext from "./ExercisesContext";
import ExercisesReducer from "./ExercisesReducer";

const ExercisesState = ({ children }) => {
  const initialState = {
    exercises:[],
    exercise:{},
    bodyPart:'all',
    exercisesResult:[]
  }; 
   const [state, dispatch] = useReducer(ExercisesReducer, initialState);



  return (
    <ExercisesContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ExercisesContext.Provider>
  );
};

export default ExercisesState;