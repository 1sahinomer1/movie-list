import { Microphone, Search } from "components/Icons";

import * as S from "./styles";

const Input = ({ ...props }) => {
  return (
    <S.InputContainer>
      <S.Section>
        <Search />
        <S.Input {...props} />
      </S.Section>
      <S.RightSection>
        <S.Line />
        <Microphone />
      </S.RightSection>
    </S.InputContainer>
  );
};

export default Input;
