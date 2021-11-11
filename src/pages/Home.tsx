import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { Card, Navbar } from "components";
import { AppState } from "store";
import { getMovie } from "store/actions/MovieActions";

import { Movie } from "types/movies";

import * as S from "styles/pages/Pages";

const Home = () => {
  const movies = useSelector((state: AppState) => state.movies.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie());
  }, []);

  return (
    <S.Container>
      <Navbar favorite={false} />
      {movies?.length > 0 && (
        <S.Text>
          <S.Bold>Featured</S.Bold>
          <S.Normal>Movies</S.Normal>
        </S.Text>
      )}
      <S.CardList>
        {movies?.map((movie: Movie, key: number) => {
          return (
            <Link to={`detail/${movie.imdbID}`} key={key}>
              <Card key={key} movie={movie} />
            </Link>
          );
        })}
      </S.CardList>
    </S.Container>
  );
};

export default Home;
