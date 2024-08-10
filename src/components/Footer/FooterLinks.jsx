import React from 'react';
import { FooterNav, FooterNavList, LinkFooter } from './Footer.styled';

const routes = {
  INGREDIENTS_PAGE: '/ingredients',
  ADD_RECIPE_PAGE: '/add-recipe',
  MY_RECIPES_PAGE: '/my-recipes',
  FAVORITE_PAGE: '/favorite',
  SHOPPING_LIST_PAGE: '/shopping-list',
};

export const FooterLinks = () => {
  return (
    <FooterNav>
      <FooterNavList>
        <li>
          <LinkFooter to={routes.INGREDIENTS_PAGE}>Ingredients</LinkFooter>
        </li>
        <li>
          <LinkFooter to={routes.ADD_RECIPE_PAGE}>Add recipes</LinkFooter>
        </li>
        <li>
          <LinkFooter to={routes.MY_RECIPES_PAGE}>My recipes</LinkFooter>
        </li>
        <li>
          <LinkFooter to={routes.FAVORITE_PAGE}>Favorite</LinkFooter>
        </li>
        <li>
          <LinkFooter to={routes.SHOPPING_LIST_PAGE}>Shopping list</LinkFooter>
        </li>
      </FooterNavList>
    </FooterNav>
  );
};
