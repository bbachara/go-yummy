import React from 'react';
import {
  ContainerFavorite,
  WrapperNotSearch,
  NotSearchText,
  ImgNotSearch,
} from './NoSearch.styled';
import notSearchPng from './img/basket.png';

export const NotSearch = () => {
  return (
    <ContainerFavorite>
      <WrapperNotSearch>
        <ImgNotSearch src={notSearchPng} alt="not-search" />
        <NotSearchText>
          The user hasn't added anything to favorites yet
        </NotSearchText>
      </WrapperNotSearch>
    </ContainerFavorite>
  );
};
