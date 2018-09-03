// @flow
import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import Row from 'components/Row';
import FacebookIcon from 'icons/Facebook';
import TwitterIcon from 'icons/Twitter';
import Content from './Content';
import FooterNavigation from './FooterNavigation';
import FooterLink from './FooterLink';

const FollowUsText = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #666666;
`;

const IconWrapper = styled.span`
  margin-left: 25px;
`;

function Footer() {
  return (
    <Container>
      <Content>
        <FooterNavigation>
          <FooterLink>Terms and Conditions</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </FooterNavigation>
        <Row alignItems="center">
          <FollowUsText>Folow Us</FollowUsText>
          <IconWrapper>
            <FacebookIcon width="24px" />
          </IconWrapper>
          <IconWrapper>
            <TwitterIcon width="24px" />
          </IconWrapper>
        </Row>
      </Content>
    </Container>
  );
}

export default Footer;
