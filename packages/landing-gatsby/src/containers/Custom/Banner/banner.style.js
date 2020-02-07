import styled from 'styled-components';
import { themeGet } from 'styled-system';

const BannerWrapper = styled.div`
  padding-top: 200px;
  padding-bottom: 130px;
  min-height: 300px;
  max-width: 1270px;
  width: 100%;
  background-color: ${themeGet('colors.lights', '#f3effd')};
  overflow: hidden;
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 40vh;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 120px;
  }
`;

export const BannerContent = styled.div`
  max-width: 1270px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    flex-shrink: 0;
  }

  h1 {
    font-size: 80px;
    text-align: center;
    line-height: 55px;
    font-weight: 700;
    color: ${themeGet('colors.labelColor', '#0D233E')};
    margin-bottom: 24px;
    @media only screen and (max-width: 1366px) {
      line-height: 42px;
      margin-bottom: 20px;
    }
  }

  h2 {
    font-size: 30px;
    text-align: center;
    line-height: 55px;
    font-weight: 700;
    color: ${themeGet('colors.yellow1', 'darkcyan')};
    margin-bottom: 24px;
    @media only screen and (max-width: 1366px) {
      line-height: 42px;
      margin-bottom: 20px;
    }
  }

  p {
    color: #6d7279;
    font-size: 16px;
    line-height: 29px;
  }
`;

export const BannerImage = styled.div`
  flex-shrink: 0;
  align-self: flex-end;
  @media only screen and (max-width: 480px) {
    margin-top: 40px;
    img {
      max-width: 70%;
    }
  }
`;

export default BannerWrapper;
