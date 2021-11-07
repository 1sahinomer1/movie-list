import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Input } from "components";

import * as S from "./styles";
import { AppState } from "store";
import { favoriteSearch } from "store/actions/MovieActions";

const FavoriteNavbar = () => {
  const [search, setSearch] = useState<string>("");

  const favorites = useSelector((state: AppState) => state.movies.favorites);
  const dispatch = useDispatch();

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    dispatch(favoriteSearch(e.currentTarget.value));
  };

  console.log(favorites);
  return (
    <S.Container>
      <S.WelcomeText>
        <S.Section>
          <S.BoldTitle>Hello!</S.BoldTitle>
          <S.Title>Audience</S.Title>
        </S.Section>
        <S.Section>
          <S.Text>You can search for your favorite content here!</S.Text>
        </S.Section>
      </S.WelcomeText>
      <Input
        placeholder={"Search Movie"}
        value={search}
        onChange={handleSearch}
      />
      <Link to="/">
        <S.FavoriteText>Back to home !</S.FavoriteText>
      </Link>
    </S.Container>
  );
};

export default FavoriteNavbar;
