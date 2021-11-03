import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;
export const Text = styled.div`
  display: flex;
  font-size: 24px;
  line-height: 36px;
  color: white;
`;
export const Bold = styled.p`
  font-weight: 500;
  margin-right: 5px;
`;
export const Normal = styled.p`
  font-weight: 300;
`;
export const CardList = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
`;
