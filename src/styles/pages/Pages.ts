import styled from "styled-components";

import { Awards } from "components/Icons";

import { breakpoints } from "theme";

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100vh;
`;
export const Text = styled.div`
  display: flex;
  font-size: 24px;
  line-height: 36px;
  color: white;

  @media ${breakpoints.lg} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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

  @media ${breakpoints.xl} {
    grid-template-columns: auto auto;
  }
  @media ${breakpoints.lg} {
    grid-template-columns: auto;
  }
`;
export const NotFavoriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailContainer = styled.div`
  width: 80%;
  margin: 100px auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: white;

  @media ${breakpoints.xl} {
    margin-top: 50px;
  }
`;
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  box-shadow: 16px 16px 39px 6px rgba(0, 0, 0, 0.25);
  margin-right: 100px;

  @media ${breakpoints.xl} {
    width: 100%;
  }
`;
export const MovieContainer = styled.div`
  display: flex;

  @media ${breakpoints.xl} {
    flex-direction: column;
  }
`;
export const LinkContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

  :hover {
    color: #f5c518;
  }
`;
export const ImageContainer = styled.img`
  max-height: 450px;
`;
export const RightSide = styled.div`
  width: 100%;
`;
export const ImdbContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 139px;
  margin-top: 20px;
`;
export const ImdbRatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
export const ImdbRating = styled.p`
  font-size: 22px;
  font-weight: 600;
`;
export const ImdbRatingMax = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
export const SelectedMovieSection = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-bottom: 20px;

  @media ${breakpoints.xl} {
    justify-content: center;
  }
  @media ${breakpoints.lg} {
    flex-direction: column;
  }
`;
export const MovieText = styled.p`
  color: white;
  padding: 5px;
  border-radius: 10px;

  @media ${breakpoints.xl} {
    text-align: center;
  }
  @media ${breakpoints.lg} {
    text-align: start;
  }
`;
export const MovieTitle = styled.p`
  font-weight: 500;
  font-size: 32px;
  margin-bottom: 20px;

  @media ${breakpoints.xl} {
    font-size: 22px;
    text-align: center;
    margin-top: 20px;
  }
  @media ${breakpoints.xs} {
    font-size: 18px;
    text-align: center;
  }
`;
export const MovieTag = styled.span`
  background-color: gray;
  margin-right: 10px;
  border-radius: 10px;
  padding: 5px;

  @media ${breakpoints.lg} {
    margin-top: 10px;
  }
`;
export const TagSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media ${breakpoints.xl} {
    justify-content: center;
  }
  @media ${breakpoints.lg} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const StyledAwards = styled(Awards)`
  margin-right: 20px;
`;
export const PlotMovieText = styled(MovieText)`
  margin-bottom: 20px;
`;
