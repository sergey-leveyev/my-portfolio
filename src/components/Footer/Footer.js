import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

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
          <LinkItem href="tel:054-6413505">054-6413505</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:sargey7@gmail.com">sargey7@gmail.com</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Linkedin</LinkTitle>
          <LinkItem href="https://www.linkedin.com/in/sergey-leveyv-234783199/">
            linkedin profile
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Github</LinkTitle>
          <LinkItem href="https://github.com/sergey-leveyev">
            Github Account
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            "Give me six hours to chop down a tree, and I will spend the first
            four sharpening the axe." Abraham Lincoln
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="#">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="#">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="#">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
