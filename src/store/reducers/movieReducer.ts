import { MovieAction, MovieState } from "types/movies";

const defaultState: MovieState = {
  data: [],
  loading: false,
  error: "",
  favorites: [],
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
    case "ADD_FAVORITE":
      //we set the favorite part of the movie in the data taken first to true
      //then we check if this movie is in the favourites.
      //If there is a movie, we return the series; if there is no movie,
      //we add the movie and make the favorite part true
      return {
        ...state,
        data: state.data.map((movie) =>
          movie.imdbID === action.payload.imdbID
            ? { ...movie, isFavorite: true }
            : movie
        ),
        favorites: state.favorites.find(
          (movie) => movie.imdbID === action.payload.imdbID
        )
          ? state.favorites
          : [...state.favorites, { ...action.payload, isFavorite: true }],
      };
    case "REMOVE_FAVORITE":
      //first we removed the movie that was sent in the favorite array
      //then we set the favorite property of the movie to false in the captured data
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        data: state.data.map((movie) =>
          movie.imdbID === action.payload.imdbID
            ? { ...movie, isFavorite: false }
            : movie
        ),
      };
    case "FIND_FAVORITE":
      //we filter favorite arrays,
      return {
        ...state,
        favorites: state.favorites.filter((movie) =>
          action.payload === ""
            ? movie
            : movie.Title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};
export default movieReducer;
