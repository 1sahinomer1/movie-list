import styled from "styled-components";

export const InputContainer = styled.div`
  background: rgba(118, 118, 128, 0.12);
  backdrop-filter: blur(20px);
  background: #7676801f;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  min-width: 500px;
  border: 1px solid;
`;

export const Input = styled.input`
  width: 300px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin-left: 20px;
  color: white;
  ::placeholder {
    color: #a0a0a0;
  }
`;

export const Line = styled.div`
  width: 30px;
  height: 0px;
  border: 1px solid #ffffff;
  transform: rotate(90deg);
  opacity: 0.3;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
