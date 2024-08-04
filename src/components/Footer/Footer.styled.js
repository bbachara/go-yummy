import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black[400]};
  color: white;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  margin: 0 auto;
  height: 432px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 60px 40px;
  }
`;

export const Main = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black[400]};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start; /* Zmiana tutaj */
  }
`;


export const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: flex-start; /* Zmiana tutaj */
    width: 100%;
  }
`;

export const FirstBlock = styled.div`
  margin: 28px 116px 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 16px 0 0; /* Zmiana tutaj */
  }
`;


export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  display: none; /* Hide on mobile */

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
    display: block; /* Show on tablet and larger screens */
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

  }
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
  }
`;

export const FooterNavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: 14px;
  align-items: center;
  width: 89px;
  height: 146px;
  top: 92px;
  left: 143px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
  }
`;

export const LinkFooter = styled(NavLink)`
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
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 0;
  }

  & > :first-of-type {
    margin-bottom: 10px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 0;
      margin-right: 14px;
    }
  }

  & span {
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes[0]};
    line-height: ${({ theme }) => theme.fontSizes[0]};
    opacity: 0.5;
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
