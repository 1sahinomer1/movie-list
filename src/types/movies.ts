import { ThunkDispatch } from "redux-thunk";

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
export interface MovieState {
  data: Movie[];
  loading: boolean;
  error: string;
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
export type MovieAction = GET_MOVIE_START | GET_MOVIE_SUCCESS | GET_MOVIE_ERROR;
export type MovieDispatch = ThunkDispatch<MovieState, any, MovieAction>;
