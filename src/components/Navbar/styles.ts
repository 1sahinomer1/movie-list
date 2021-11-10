import { ActiveStar, Home, Star } from "components/Icons";
import styled from "styled-components";
import { breakpoints } from "theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-top: 20px;
  margin-bottom: 100px;
  @media ${breakpoints.xl} {
    margin-bottom: 50px;
  }
`;

export const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  @media ${breakpoints.lg} {
    display: none;
  }
`;

export const Section = styled.div`
  display: flex;
`;

export const BoldTitle = styled.p`
  font-weight: 600;
  color: white;
  font-size: 24px;
  margin-right: 5px;
`;

export const Title = styled.p`
  color: white;
  font-weight: 300;
  font-size: 24px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #a0a0a0;
  @media ${breakpoints.xl} {
    display: none;
  }
`;

export const FavoriteText = styled.p`
  color: white;
  cursor: pointer;
  @media ${breakpoints.xl} {
    display: none;
  }
`;

export const Favorite = styled.p`
  color: white;
`;
export const StyledActiveStar = styled(ActiveStar)`
  display: none;
  @media ${breakpoints.xl} {
    display: block;
  }
`;
export const StyledMainIcon = styled(Home)`
  display: none;
  @media ${breakpoints.xl} {
    display: block;
  }
`;
export const StyledStar = styled(Star)`
  display: none;
  @media ${breakpoints.xl} {
    display: block;
  }
`;
