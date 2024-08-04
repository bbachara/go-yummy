import * as React from 'react';
import {
  Main,
  FirstBlock,
  FooterMain,
  FooterMainBlock,
  FooterWrapper,
  FooterContainer,
  FeaturesList,
} from './Footer.styled';

import { FooterTitle } from './FooterTitle';
import { FooterLinks } from './FooterLinks';
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
              <FooterLinks />
            </FooterMainBlock>
            <SubscribeForm />
          </FooterMain>
          <SocialLinks />
        </FooterWrapper>
        <FooterDown />
      </Main>
    </FooterContainer>
  );
};
