import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:">7987987987</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Mail To</LinkTitle>
          <LinkItem href="yatharthnigam@gmail.com">
            yatharthnigam@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning new things everyday.</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
          <SocialIcons href="https://github.com/YatharthNigam">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/yatharthnigam/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/yatharthnigam">
            {/* <AiFillTwitter size="3rem" /> */}
          </SocialIcons>
        </SocialIconsContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
