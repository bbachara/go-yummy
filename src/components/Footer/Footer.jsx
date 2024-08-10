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

const routes = {
  INGREDIENTS_PAGE: '/categories',
  ADD_RECIPE_PAGE: '/add-recipe',
  MY_RECIPES_PAGE: '/my-recipes',
  FAVORITE_PAGE: '/favorites',
  SHOPPING_LIST_PAGE: '/shopping-list',
};

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
                    <LinkFooter to={routes.INGREDIENTS_PAGE}>
                      Ingredients
                    </LinkFooter>
                  </li>
                  <li>
                    <LinkFooter to={routes.ADD_RECIPE_PAGE}>
                      Add recipes
                    </LinkFooter>
                  </li>
                  <li>
                    <LinkFooter to={routes.MY_RECIPES_PAGE}>
                      My recipes
                    </LinkFooter>
                  </li>
                  <li>
                    <LinkFooter to={routes.FAVORITE_PAGE}>Favorite</LinkFooter>
                  </li>
                  <li>
                    <LinkFooter to={routes.SHOPPING_LIST_PAGE}>
                      Shopping list
                    </LinkFooter>
                  </li>
                </FooterNavList>
              </FooterNav>
              <SubscribeForm />
            </FooterMainBlock>
          </FooterMain>
          <SocialLinks />
        </FooterWrapper>
        <FooterDown />
      </Main>
    </FooterContainer>
  );
};
