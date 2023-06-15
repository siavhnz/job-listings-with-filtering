import { createContext, useEffect, useReducer } from "react";
import { jobsInitialState, jobsReducer } from "./jobs-reducer";
import jobsData from "../store/data.json";

export const JobsContext = createContext({
  ...jobsInitialState,
  addToFilter: (title) => {},
  removeFromFilter: (title) => {},
  clearAllFilter: () => {},
});

const JobsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobsReducer, jobsInitialState);

  useEffect(() => {
    dispatch({ type: "LOAD_DATA", payload: jobsData });
  }, []);

  const addToFilter = (text) => {
    dispatch({ type: "ADD_TO_FILTER", payload: text });
  };

  const removeFromFilter = (text) => {
    dispatch({ type: "REMOVE_FROM_FILTER", payload: text });
  };

  const clearAllFilter = (text) => {
    dispatch({ type: "CLEAR_ALL_FILTER" });
  };

  const value = {
    ...state,
    addToFilter,
    removeFromFilter,
    clearAllFilter,
  };

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>;
};

export default JobsContextProvider;
