import axios from "axios";
import { GetMovieState, MovieDispatch } from "types/movies";

const API_KEY = "b7edb55e"; //OMDB API KEY

export const getMovie =
  (searchValue = "harry potter") =>
  async (dispatch: MovieDispatch) => {
    dispatch({ type: "GET_MOVIE_START" });
    try {
      const response = await axios.get<GetMovieState>(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`
      );
      dispatch({ type: "GET_MOVIE_SUCCESS", payload: response.data.Search });
    } catch (error) {
      dispatch({ type: "GET_MOVIE_ERROR" });
    }
  };

export const addFavorite = (id: string) => (dispatch: MovieDispatch) => {
  dispatch({ type: "ADD_FAVORITE", payload: id });
};
export const removeFavorite = (id: string) => (dispatch: MovieDispatch) => {
  dispatch({ type: "REMOVE_FAVORITE", payload: id });
};
