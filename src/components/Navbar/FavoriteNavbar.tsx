import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Input } from "components";

import { findFavorite } from "store/actions/MovieActions";

import * as S from "./styles";

const FavoriteNavbar = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    dispatch(findFavorite(e.currentTarget.value));
  };

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
