import styled from 'styled-components';

const CelebrityDesc = styled.div`
  color: rgb(255, 255, 255);
  line-height: 1.143;
  margin-bottom: 24px;
  font-weight: 300;
  font-size: 21px;
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`;

export default CelebrityDesc;
