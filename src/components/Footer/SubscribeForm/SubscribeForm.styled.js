import styled from '@emotion/styled';
import { theme } from '../theme';
import { FiMail } from 'react-icons/fi';

export const FooterForm = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 44px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    flex-direction: row;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  position: relative;
  width: 204px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    height: 50px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    height: 59px;
    margin-bottom: 16px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  width: 204px;
  height: 38px;
  color: ${({ theme }) => theme.colors.white[200]};
  font-size: ${({ theme }) => theme.fontSizes[0]};
  line-height: 1.5;
  letter-spacing: -0.02em;
  border: none;
  border-radius: 6px;
  transition: ${({ theme }) => theme.transitions.create(['border-color'])};

  &::placeholder {
    color: ${({ theme }) => theme.colors.white[200]};
    font-size: ${({ theme }) => theme.fontSizes[0]};
    line-height: 1.5;
  }

  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 259px;
    height: 50px;
    padding: 15px 30px 15px 50px;
    margin-right: 12px;
    font-size: ${({ theme }) => theme.fontSizes[2]};

    &::placeholder {
      font-size: ${({ theme }) => theme.fontSizes[2]};
    }
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 338px;
    height: 59px;
    padding: 18px 40px 18px 51px;
    margin-right: 0;
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.fontSizes[4]};

    &::placeholder {
      font-size: ${({ theme }) => theme.fontSizes[4]};
    }
  }
`;

export const SubscribeButton = styled.button`
  width: 204px;
  height: 38px;
  margin: 0 auto;
  padding: 11px 67px;
  color: ${({ theme }) => theme.colors.white[200]};
  background-color: ${({ theme }) => theme.colors.green[200]};
  border: none;
  border-radius: 6px;
  transition: ${({ theme }) => theme.transitions.create(['color'])};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  cursor: pointer;

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.black[400]};
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 171px;
    height: 50px;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: ${({ theme }) => theme.fontSizes[4]};
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    height: 60px;
  }
`;

export const IconLetter = styled(FiMail)`
  position: absolute;
  left: 14px;
  top: 11px;
  width: 20px;
  height: 16px;
  color: ${({ theme }) => theme.colors.white[200]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    left: 15px;
    top: 13px;
    height: 22px;
    width: 26px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    left: 15.5px;
    top: 19px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white[100]};
  }
`;

export const SubscribeTitle = styled.h3`
  display: none;

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    display: block;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.white[200]};
    margin-bottom: 14px;
  }
`;

export const SubscribeText = styled.p`
  display: none;

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes[2]};
    line-height: 1.28;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.white[200]};
    margin: 0;
    margin-bottom: 28px;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 6px;
  font-size: ${({ theme }) => theme.fontSizes[0]};
  color: ${({ theme }) => theme.colors.red[100]};

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    position: absolute;
    top: -22px;
  }
`;
