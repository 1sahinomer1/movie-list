import { Star, Watched } from "components/Icons";
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
        <S.Title>
          {movie.Type} | {movie.Year}
        </S.Title>
      </S.MovieDetail>
      <S.MovieButtons>
        <S.FavContainer>
          <Star />
          <S.StarText> Fav List</S.StarText>
        </S.FavContainer>
        <S.WatchedContainer>
          <Watched />
          <S.StarText> Watched List</S.StarText>
        </S.WatchedContainer>
      </S.MovieButtons>
    </S.Container>
  );
};

export default Card;
