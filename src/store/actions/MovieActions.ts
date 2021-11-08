import axios from "axios";

import {
  GetMovieState,
  Movie,
  MovieDispatch,
  SelectedMovie,
} from "types/movies";

const API_KEY = "b7edb55e"; //OMDB API KEY

export const getMovie =
  (searchValue: string) => async (dispatch: MovieDispatch) => {
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

export const getMovieDetail =
  (id: string) => async (dispatch: MovieDispatch) => {
    try {
      const response = await axios.get<SelectedMovie>(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      );
      dispatch({ type: "GET_MOVIE_DETAIL", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_MOVIE_ERROR" });
    }
  };

export const addFavorite = (Movie: Movie) => (dispatch: MovieDispatch) => {
  dispatch({ type: "ADD_FAVORITE", payload: Movie });
};

export const removeFavorite = (Movie: Movie) => (dispatch: MovieDispatch) => {
  dispatch({ type: "REMOVE_FAVORITE", payload: Movie });
};

export const favoriteSearch = (title: string) => (dispatch: MovieDispatch) => {
  dispatch({ type: "FAVORITE_SEARCH", payload: title });
};
