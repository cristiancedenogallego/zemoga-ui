import styled from 'styled-components';

const TimeToEndLabel = styled.div`
  color: white;
  text-align: right;
  flex: 3.3;
  padding-right: 30px;
  line-height: ${props => props.theme.progressBarHeight};
`;

export default TimeToEndLabel;
