import styled from 'styled-components';

export const BannerWrapper = styled.section`
  padding: 180px 0 100px 0;
  background-size: cover;
  background-color: #f3effd;
  background-position: top center;
  @media (max-width: 575px) {
    padding: 120px 0 0 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const DiscountWrapper = styled.div`
  text-align: center;
`;

export const DiscountLabel = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: inline-block;
  border-radius: 4em;
  padding: 9px 22px;
  margin-bottom: 22px;
  background-color: rgba(255, 255, 255, 0.15);
  @media (max-width: 575px) {
    padding: 7px 10px;
  }
`;
