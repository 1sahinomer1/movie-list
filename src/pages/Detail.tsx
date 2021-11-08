import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { AppState } from "store";
import { getMovieDetail } from "store/actions/MovieActions";

import { Back, Imdb } from "components/Icons";

import * as S from "../styles/pages/Pages";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const selectedMovie = useSelector(
    (state: AppState) => state.movies.selectedMovie
  );

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, []);

  return (
    <S.DetailContainer>
      <Link to="/">
        <S.LinkContentWrapper>
          <Back />
          <S.Text>Back to home</S.Text>
        </S.LinkContentWrapper>
      </Link>
      <S.MovieContainer>
        <S.LeftSide>
          <S.ImageContainer src={selectedMovie.Poster}></S.ImageContainer>
          <S.ImdbContainer>
            <Imdb />
            <S.ImdbRatingWrapper>
              <S.ImdbRating>{selectedMovie.imdbRating}</S.ImdbRating>
              <S.ImdbRatingMax>/10</S.ImdbRatingMax>
            </S.ImdbRatingWrapper>
          </S.ImdbContainer>
          <S.MovieText>{selectedMovie.Language}</S.MovieText>
          <S.MovieText>{selectedMovie.BoxOffice}</S.MovieText>
        </S.LeftSide>
        <S.RightSide>
          <S.MovieTitle>{selectedMovie.Title}</S.MovieTitle>
          <S.TagSection>
            <S.MovieTag>#{selectedMovie.Released}</S.MovieTag>
            <S.MovieTag>#{selectedMovie.Genre}</S.MovieTag>
            <S.MovieTag>#{selectedMovie.Runtime}</S.MovieTag>
          </S.TagSection>
          <S.SelectedMovieSection>
            <S.StyledAwards />
            {selectedMovie.Awards}.
          </S.SelectedMovieSection>
          <S.PlotMovieText>{selectedMovie.Plot}</S.PlotMovieText>
          <S.MovieText>Writer : {selectedMovie.Writer}</S.MovieText>
          <S.MovieText>Actors : {selectedMovie.Actors}</S.MovieText>
        </S.RightSide>
      </S.MovieContainer>
    </S.DetailContainer>
  );
};

export default Detail;
