import styled from 'styled-components';

const ContentSectionWrapper = styled.section`
  padding: 80px 0 120px 30px;
  @media (max-width: 1440px) {
    padding: 80px 0 80px 30px;
  }

  @media (max-width: 990px) {
    padding: 70px 0 60px 20px;
  }
  @media (max-width: 767px) {
    padding: 70px 0 30px 20px;
  }
`;

export default ContentSectionWrapper;
