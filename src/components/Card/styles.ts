import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
    360deg,
    #000000 0.83%,
    rgba(7, 7, 11, 0.71) 48.75%,
    rgba(17, 17, 25, 0.24) 75.31%,
    rgba(18, 18, 24, 0) 100%
  );
  min-height: 600px;
  position: relative;
`;

export const Title = styled.p`
  font-weight: 600;
  text-align: center;
  color: #a0a0a0;
`;
export const ImageContainer = styled.img`
  max-height: 450px;
`;
export const MovieDetail = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MovieButtons = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;
export const IconContainer = styled.div`
  padding: 10px;
  backdrop-filter: blur(6px);
  border: 1px solid #a0a0a0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const WatchedContainer = styled(IconContainer)`
  cursor: pointer;
  :hover {
    background: red;
  }
`;
export const FavContainer = styled(IconContainer)`
  cursor: pointer;
  :hover {
    background: green;
  }
`;
export const StarText = styled.p`
  font-weight: 600;
  color: white;
  margin-left: 15px;
`;
