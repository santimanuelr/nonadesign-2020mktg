import styled from 'styled-components';
import { themeGet } from 'styled-system';

const AboutWrapper = styled.div`
  padding-top: 30px;
  min-height: 200px;
  background-color: ${themeGet('colors.light', '#FAFBFF')};
  overflow: hidden;
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 70vh;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 120px;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(302px - 200px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: calc(100vh - 200px);
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
    }
  }
`;

export const AboutContentLeft = styled.div`
  max-width: 425px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    flex-shrink: 0;
  }

  h2 {
    font-size: 18px;
    line-height: 30px;
    font-weight: 300;
    color: ${themeGet('colors.menu', '#0D233E')};
    margin-bottom: 24px;
    @media only screen and (max-width: 1366px) {
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 30px;
    }
  }

  p {
    color: #6d7279;
    font-size: 16px;
    line-height: 29px;
  }
`;

export const AboutContentRight = styled.div`
  max-width: 425px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    flex-shrink: 0;
  }

  h1 {
    font-size: 46px;
    line-height: 35px;
    font-weight: 900;
    color: ${themeGet('colors.menu', '#0D233E')};
    margin-bottom: 24px;
    @media only screen and (max-width: 1366px) {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 0px;
    }
  }

  p {
    color: #6d7279;
    font-size: 16px;
    line-height: 29px;
  }
`;

export default AboutWrapper;
