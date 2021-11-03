import { Input } from "components";

import * as S from "./styles";

const Navbar = () => {
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
      <Input placeholder={"Search"} />
      <S.Favorite>Favladıklarım</S.Favorite>
    </S.Container>
  );
};

export default Navbar;
