import { useSelector } from "react-redux";
import { AppState } from "store";

import { Card, FavoriteNavbar } from "components";

import { Movie } from "types/movies";

import { Link } from "react-router-dom";

import * as S from "styles/pages/Pages";

const Favorites = () => {
  const favorites = useSelector((state: AppState) => state.movies.favorites);

  return (
    <S.Container>
      <FavoriteNavbar />
      <S.Text>
        <S.Bold>My Favorite</S.Bold>
        <S.Normal>Movies</S.Normal>
      </S.Text>
      <S.CardList>
        {favorites.length === 0 ? (
          <S.NotFavoriteWrapper>
            <S.Text>You haven't added a movie to your favorites yet.</S.Text>
            <Link to="/">
              <S.Text>Let's check out the movies!</S.Text>
            </Link>
          </S.NotFavoriteWrapper>
        ) : (
          favorites.map((movie: Movie, key: number) => (
            <Card movie={movie} key={key} />
          ))
        )}
      </S.CardList>
    </S.Container>
  );
};

export default Favorites;
