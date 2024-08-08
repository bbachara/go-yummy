import styled from '@emotion/styled';
import { theme } from './theme';
import { NavLink, Link } from 'react-router-dom';

import SpinachMobile1x from "./images/spinach-main-bg/SpinachMobile1x.png";
import SpinachTablet1x from "./images/spinach-main-bg/SpinachTablet1x.png";
import SpinachDesktop1x from "./images/spinach-main-bg/SpinachDesktop1x.png";

export const FooterContainer = styled.footer`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.black[200]};
  color: white;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 50px 0 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  display: flex;
  align-items: baseline;
  padding: 64px 0;
  height: 414px;
  }
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: space-between;
  };
  
`;

export const FooterWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[200]};
`;

export const FooterMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  flex-direction: column;
`;

export const FooterMainBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;

export const FirstBlock = styled.div`
  margin: 28px 116px 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0;
  }
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  display: none; /* Ukryj na urządzeniach mobilnych */

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 380px;
    height: 102px;

    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.02em;

    display: flex;
    flex-direction: column;
    list-style: inside;
    text-align: left;
    margin-top: 24px;
    gap: 10px;
  };

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 418px;
    height: 156px;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.02em;

    display: flex;
    flex-direction: column;
    list-style-position: outside;
    margin: 40px 0 0 0;
    gap: 10px;
  }
`;

export const Feature = styled.li`
  margin-bottom: 10px;
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
  };
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white[200]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes[6]};
  }
`;

export const SvgWrapper = styled(Link)`
  display: flex;
  justify-content: center;

  svg {
    width: 32px;
    height: 32px;
    gap: 8px;
    border-radius: 6px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 44px;
      height: 44px;
    }
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
    margin-bottom: 0;
  };

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: flex-start;
    margin-bottom: 0;
  };
  
`;

export const FooterNavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: 14px;
  align-items: center;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 0 0 173px;
  };

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 89px;
    height: 186px;
    margin: -64px 0 0 159px;
    gap: 24px;

    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.02em;
  }
`;

export const LinkFooter = styled(NavLink)`
font-family: Poppins;
  color: #FAFAFA;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.create(['color'])};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.green[200]};
  }
`;

export const DownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  color: ${({ theme }) => theme.colors.black[400]};
  font-family: Poppins;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  padding: 28px 0;

  background: ${({ theme }) => theme.colors.white[200]} url(${SpinachMobile1x}) no-repeat;
  background-position: right -50px bottom -70px;
  background-size: 216px 222px;

  & > :first-of-type {
    margin-right: 14px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
  & span {
    font-family: inherit;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[0]};
    line-height: ${({ theme }) => theme.fontSizes[0]};
    letter-spacing: -0.01em;
    opacity: 0.5;
  }

  @media only screen and (min-width: ${theme.breakpoints[1]}) and (max-width: ${theme.breakpoints[2]}) {

  padding: 32px 0;
    background: ${({ theme }) => theme.colors.white[200]} url(${SpinachTablet1x})
    no-repeat;
    background-position: right -70px bottom -150px;
    background-size: 393px 404px;
    height: 78px;
    & > :first-of-type {
      margin-right: 28px;
    }
    & span {
      font-size: 14px;
      line-height: 14px;
    }
  }
  @media only screen and (min-width: ${theme.breakpoints[2]}) {

  padding: 50px 0;
    background: ${({ theme }) => theme.colors.white[200]} url(${SpinachDesktop1x})
      no-repeat;
    background-position: right -70px bottom -230px;
    background-size: 593px 611px;
  }
    & span {
      font-size: 14px;
      line-height: 14px;
    }
    & > :first-of-type {
    }
  }
`;

export const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
    margin-top: 0;
  }
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.green[200]};
  margin: 0 10px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.green[300]};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
