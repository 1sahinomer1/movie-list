import { useSelector } from "react-redux";

import { Card, Navbar } from "components";
import { AppState } from "store";

import { Movie } from "types/movies";

import * as S from "styles/pages/Pages";
import { Link } from "react-router-dom";

const Home = () => {
  const movies = useSelector((state: AppState) => state.movies.data);

  return (
    <S.Container>
      <Navbar favorite={false} />
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
          return (
            <Link to={`detail/${movie.imdbID}`}>
              <Card key={key} movie={movie} />
            </Link>
          );
        })}
      </S.CardList>
    </S.Container>
  );
};

export default Home;
