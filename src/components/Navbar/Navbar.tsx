import { Input } from "components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

import { getMovie } from "store/actions/MovieActions";

import * as S from "./styles";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    if (search?.length > 3) {
      dispatch(getMovie(e.currentTarget.value));
    }
    setSearch(e.currentTarget.value);
  };
  return (
    <S.Container>
      <S.WelcomeText>
        <S.Section>
          <S.BoldTitle>Hello!</S.BoldTitle>
          <S.Title>Visitor</S.Title>
        </S.Section>
        <S.Section>
          <S.Text>You can search for the movie you want and like it!</S.Text>
        </S.Section>
      </S.WelcomeText>
      <Input placeholder={"Search"} value={search} onChange={handleSearch} />
      <S.Favorite>
        <Link to="/favorites">My favorites</Link>
      </S.Favorite>
    </S.Container>
  );
};

export default Navbar;
