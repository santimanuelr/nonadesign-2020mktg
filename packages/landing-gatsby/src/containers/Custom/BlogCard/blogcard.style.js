import styled from 'styled-components';
import { themeGet } from 'styled-system';

const SectionWrapper = styled.div`
  overflow: hidden;
  background-color: #f5f7f9;
  margin-top: 30px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .image {
    width: calc(100% - 710px);
    @media only screen and (max-width: 991px) {
      width: calc(100% - 290px);
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .content {
    width: 710px;
    padding-left: 30px;
    @media only screen and (max-width: 991px) {
      width: 290px;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
    h2 {
      color: ${themeGet('colors.headingColor', '#0F2137')};
      font-size: 24px;
      font-weight: 500;
      @media only screen and (max-width: 991px) {
        font-size: 22px;
      }
      @media only screen and (max-width: 768px) {
        max-width: 100%;
      }
    }
    p {
      font-size: 16px;
      line-height: 26px;
      color: #6e7379;
      margin-bottom: 0px;
      @media only screen and (max-width: 1366px) {
        margin-bottom: 0px;
      }
      @media only screen and (max-width: 768px) {
        text-align: center;
      }
    }
    h5 {
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 0px;
      letter-spacing: 1.5px;
      color: ${themeGet('colors.primary', '#0F2137')};
      text-transform: uppercase;
      @media only screen and (max-width: 768px) {
        text-align: center;
      }
    }
  }
`;

export default SectionWrapper;
