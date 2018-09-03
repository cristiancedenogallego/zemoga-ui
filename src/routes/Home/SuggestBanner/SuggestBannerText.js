import styled from 'styled-components';

const SuggestBannerText = styled.div`
  color: #333333;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 600px) {
    margin-bottom: 0;
    text-align: left;
  }
`;

export default SuggestBannerText;
