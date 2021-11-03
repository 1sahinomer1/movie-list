import { Card, Navbar } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { getMovie } from "store/actions/MovieActions";

import * as S from "styles/pages/Home";
import { Movie } from "types/movies";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state.movies);
  const movies = state.data;

  useEffect(() => {
    dispatch(getMovie());
  }, []);
  return (
    <S.Container>
      <Navbar />
      <S.Text>
        <S.Bold>Featured</S.Bold>
        <S.Normal>Movies</S.Normal>
      </S.Text>
      <S.CardList>
        {movies?.map((movie: Movie, key: number) => {
          return <Card key={key} movie={movie} />;
        })}
      </S.CardList>
    </S.Container>
  );
};

export default Home;
