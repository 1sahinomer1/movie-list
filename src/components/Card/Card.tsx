import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";

import { addFavorite, removeFavorite } from "store/actions/MovieActions";

import { Movie } from "types/movies";

import noImage from "utils/noImage.jpg";
import * as S from "./styles";

interface cardTypes {
  movie: Movie;
}

const Card = ({ movie }: cardTypes) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: AppState) => state.movies.favorites);

  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <S.Container>
      {movie.Poster === "N/A" ? (
        <S.ImageContainer src={noImage} />
      ) : (
        <S.ImageContainer src={movie.Poster} />
      )}

      <S.MovieDetail>
        <S.Title>{movie.Title}</S.Title>
        <S.Title>{movie.Year}</S.Title>
      </S.MovieDetail>
      {movie.isFavorite === undefined || movie.isFavorite === false ? (
        <S.StyledStar
          onClick={(e) => {
            e.preventDefault();
            dispatch(addFavorite(movie));
          }}
        />
      ) : (
        <S.StyledActiveStar
          onClick={(e) => {
            e.preventDefault();
            dispatch(removeFavorite(movie));
          }}
        />
      )}
    </S.Container>
  );
};

export default Card;
