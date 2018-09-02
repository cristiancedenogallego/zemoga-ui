// @flow
import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import FacebookIcon from 'icons/Facebook';
import TwitterIcon from 'icons/Facebook';
import Content from './Content';
import FooterNavigation from './FooterNavigation';
import FooterLink from './FooterLink';

const FollowUsText = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #666666;
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
        <div>
          <FollowUsText>Folow Us</FollowUsText>
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </Content>
    </Container>
  );
}

export default Footer;
