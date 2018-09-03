import styled from 'styled-components';

const Content = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  padding: 32px 0;
  width: 100%;
  background-image: linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%);
  background-position: top;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Content;
