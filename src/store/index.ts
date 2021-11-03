import { combineReducers } from "redux";
import { MovieState } from "types/movies";
import movieReducer from "./reducers/movieReducer";

export interface AppState {
  movies: MovieState;
}

const rootReducer = combineReducers<AppState>({
  movies: movieReducer,
});
export default rootReducer;
