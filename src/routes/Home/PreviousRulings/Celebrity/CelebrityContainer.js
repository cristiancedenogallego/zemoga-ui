import styled from 'styled-components';

const CelebrityContainer = styled.article`
  background-image: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0, 0.61) 37%, rgba(0,0,0,0.0) 74%), url(${props => props.imageUrl});
  background-size: cover;
  background-position: 50%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding: 35px 40px ${props => `calc(35px + ${props.theme.progressBarHeight})`};
  flex-direction: column;
  min-height: 400px;

  @media (min-width: 700px) {
    min-height: 550px;
  }
`;

export default CelebrityContainer;
