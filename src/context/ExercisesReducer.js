export default (state, action) => {
  switch (action.type) {
    case "ALL_EXERCISES":
        return {
          ...state,
          exercises: action.payload,
          exercisesResult:action.payload
        
        };
    case "SEARCH_EXERCISES":
      return {
        ...state,
        exercisesResult: action.payload
      
      };
    case "SET_BODY_PART":
      return {
        ...state,
        bodyPart: action.payload
      };
      case "SET_EXERCISE":
        return {
          ...state,
          exercise : action.payload
        };
    default:
      return state;
  }
};
