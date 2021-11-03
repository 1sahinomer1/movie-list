import { MovieAction, MovieState } from "types/movies";

const defaultState: MovieState = {
  data: [],
  loading: false,
  error: "",
};

const movieReducer = (
  state: MovieState = defaultState,
  action: MovieAction
) => {
  switch (action.type) {
    case "GET_MOVIE_START":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "GET_MOVIE_ERROR":
      return {
        ...state,
        loading: false,
        error: "There was a problem pulling data.",
      };
    default:
      return state;
  }
};
export default movieReducer;