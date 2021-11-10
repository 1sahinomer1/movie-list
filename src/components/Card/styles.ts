import styled from "styled-components";

import { ActiveStar, Star } from "components/Icons";

import { breakpoints } from "theme";

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
  height: 550px;
  position: relative;
  border-radius: 10px;

  @media ${breakpoints.xs} {
    height: 400px;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  text-align: center;
  color: #a0a0a0;
`;

export const ImageContainer = styled.img`
  max-height: 450px;
  border-radius: 10px;

  @media ${breakpoints.xs} {
    width: 200px;
  }
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
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledStar = styled(Star)`
  margin: 20px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;

  @media ${breakpoints.lg} {
    margin-right: 40px;
    margin-top: 20px;
  }
  @media ${breakpoints.xs} {
    margin-top: 10px;
  }
`;

export const StyledActiveStar = styled(ActiveStar)`
  margin: 20px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;

  @media ${breakpoints.lg} {
    margin-right: 40px;
    margin-top: 20px;
  }
  @media ${breakpoints.xs} {
    margin-top: 10px;
  }
`;
