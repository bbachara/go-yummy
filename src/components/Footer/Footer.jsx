import * as React from 'react';
import {
  Main,
  FirstBlock,
  FooterMain,
  FooterMainBlock,
  FooterWrapper,
  FooterContainer,
  FeaturesList,
  FooterNav,
  FooterNavList,
  LinkFooter,
} from './Footer.styled';

import { FooterTitle } from './FooterTitle';
import { SubscribeForm } from './SubscribeForm/SubscribeForm';
import { SocialLinks } from './SocialLinks/SocialLinks';
import { FooterDown } from './FooterCopyright';

export const Footer = () => {
  return (
    <FooterContainer>
      <Main>
        <FooterWrapper>
          <FooterMain>
            <FooterMainBlock>
              <FirstBlock>
                <FooterTitle />
                <FeaturesList>
                  <li>Database of recipes that can be replenished</li>
                  <li>Flexible search for desired and unwanted ingredients</li>
                  <li>Ability to add your own recipes with photos</li>
                  <li>Convenient and easy to use</li>
                </FeaturesList>
              </FirstBlock>
              <FooterNav>
                <FooterNavList>
                  <li>
                    <LinkFooter to="/ingredients">Ingredients</LinkFooter>
                  </li>
                  <li>
                    <LinkFooter to="/add-recipes">Add recipes</LinkFooter>
                  </li>
                  <li>
                    <LinkFooter to="/my-recipes">My recipes</LinkFooter>
                  </li>
                  <li>
                    <LinkFooter to="/favorite">Favorite</LinkFooter>
                  </li>
                  <li>
                    <LinkFooter to="/shopping-list">Shopping list</LinkFooter>
                  </li>
                </FooterNavList>
              </FooterNav>
              <SubscribeForm />
            </FooterMainBlock>
          </FooterMain>
          <SocialLinks />
        </FooterWrapper>
      </Main>
      {/* <FooterDown /> */}
    </FooterContainer>
  );
};
