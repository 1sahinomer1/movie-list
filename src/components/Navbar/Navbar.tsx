import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Input } from "components";

import { favoriteSearch, getMovie } from "store/actions/MovieActions";

import * as S from "./styles";

const Navbar: React.FC<{ favorite: boolean }> = ({ favorite }) => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    if (search?.length > 3 && !favorite) {
      dispatch(getMovie(e.currentTarget.value));
    } else if (favorite) {
      dispatch(favoriteSearch(e.currentTarget.value));
    }
    setSearch(e.currentTarget.value);
  };
  return (
    <S.Container>
      <S.WelcomeText>
        <S.Section>
          <S.BoldTitle>Hello!</S.BoldTitle>
          <S.Title>{favorite ? "Audience" : "Visitor"}</S.Title>
        </S.Section>
        <S.Section>
          <S.Text>
            {favorite
              ? "You can search for your favorite content here!"
              : "You can search for the movie you want and like it!"}
          </S.Text>
        </S.Section>
      </S.WelcomeText>
      <Input placeholder={"Search"} value={search} onChange={handleSearch} />
      {favorite ? (
        <Link to="/">
          <S.FavoriteText>Back to home !</S.FavoriteText>
        </Link>
      ) : (
        <Link to="/favorites">
          <S.FavoriteText>My favorites</S.FavoriteText>
        </Link>
      )}
    </S.Container>
  );
};

export default Navbar;
