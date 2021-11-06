import { useSelector } from "react-redux";

import { Card, Navbar } from "components";
import { AppState } from "store";

import { Movie } from "types/movies";

import * as S from "styles/pages/Pages";

const Home = () => {
  const state = useSelector((state: AppState) => state.movies);
  const movies = state.data;

  return (
    <S.Container>
      <Navbar />
      {movies?.length > 0 ? (
        <S.Text>
          <S.Bold>Featured</S.Bold>
          <S.Normal>Movies</S.Normal>
        </S.Text>
      ) : (
        <S.NoDataText>
          <S.Bold>Search a movie!</S.Bold>
          <S.Normal>i.e. Harry Potter</S.Normal>
        </S.NoDataText>
      )}
      <S.CardList>
        {movies?.map((movie: Movie, key: number) => {
          return <Card key={key} movie={movie} />;
        })}
      </S.CardList>
    </S.Container>
  );
};

export default Home;
