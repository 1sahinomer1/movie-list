import { combineReducers } from "redux";
import { MovieState } from "types/movies";
import movieReducer from "./reducers/movieReducer";

export interface AppState {
  movies: MovieState;
}

const rootReducer = combineReducers({
  movies: movieReducer,
});
export default rootReducer;
