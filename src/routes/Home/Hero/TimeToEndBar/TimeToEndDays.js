import styled from 'styled-components';

const TimeToEndDays = styled.time`
  clip-path: polygon(0% 0%,100% 0%,100% 99%,0% 100%,0% calc(50% + 5px),5px 50%,0% calc(50% - 5px));
  background: rgba(256,256,256,0.7);
  height: 100%;
  flex: 7;
  padding-left: 13px;
  line-height: ${props => props.theme.progressBarHeight};
  font-size: 35.472px;
  color: rgb(70, 70, 70);
  transform: matrix( 1.04594681823723,0,0,1.02545451173116,0,0);
`;

export default TimeToEndDays;
