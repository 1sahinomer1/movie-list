import { useDispatch } from "react-redux";

import { addFavorite, removeFavorite } from "store/actions/MovieActions";

import { Movie } from "types/movies";

import * as S from "./styles";

interface cardTypes {
  movie: Movie;
}

const Card = ({ movie }: cardTypes) => {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.ImageContainer src={movie.Poster} />
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
