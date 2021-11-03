import { Microphone, Search } from "components/Icons";
import * as S from "./styles";
const Input = ({ ...props }) => {
  return (
    <S.InputContainer>
      <S.Section>
        <Search />
        <S.Input {...props} />
      </S.Section>
      <S.Section>
        <S.Line />
        <Microphone />
      </S.Section>
    </S.InputContainer>
  );
};

export default Input;
