import { Movie } from "types/movies";
import * as S from "./styles";

interface cardTypes {
  movie: Movie;
}

const Card = ({ movie }: cardTypes) => {
  return (
    <S.Container>
      <S.ImageContainer src={movie.Poster} />
      <S.MovieDetail>
        <S.Title>{movie.Title}</S.Title>
        <S.Title>{movie.Year}</S.Title>
      </S.MovieDetail>
      <S.StyledStar />
    </S.Container>
  );
};

export default Card;
