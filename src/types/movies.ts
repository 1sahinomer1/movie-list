import { ThunkDispatch } from "redux-thunk";

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  isFavorite?: boolean;
}
export interface MovieState {
  data: Movie[];
  loading: boolean;
  error: string;
  favorites: Movie[];
}
export interface GetMovieState {
  Response: string;
  Search: Movie[];
  totalResults: string;
}
interface GET_MOVIE_START {
  type: "GET_MOVIE_START";
}
interface GET_MOVIE_SUCCESS {
  type: "GET_MOVIE_SUCCESS";
  payload: Movie[];
}
interface GET_MOVIE_ERROR {
  type: "GET_MOVIE_ERROR";
}
interface ADD_FAVORITE {
  type: "ADD_FAVORITE";
  payload: Movie;
}
interface REMOVE_FAVORITE {
  type: "REMOVE_FAVORITE";
  payload: Movie;
}
interface FIND_FAVORITE {
  type: "FIND_FAVORITE";
  payload: string;
}
export type MovieAction =
  | GET_MOVIE_START
  | GET_MOVIE_SUCCESS
  | GET_MOVIE_ERROR
  | REMOVE_FAVORITE
  | ADD_FAVORITE
  | FIND_FAVORITE;

export type MovieDispatch = ThunkDispatch<MovieState, any, MovieAction>;
