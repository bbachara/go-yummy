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
    margin: 0 0 0 253px;
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
    padding: 72px 155px 38px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    flex-direction: column;
    padding: 0;
  }
`;

export const InputWrapper = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  position: relative;
  width: 204px;
  height: 38px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 259px;
    height: 50px;
    border-radius: 8px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 338px;
    height: 59px;
    margin-bottom: 16px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  min-width: 204px;
  height: 38px;
  padding: 12px 42px 12px 42px;
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
    font-weight: 400;
    font-family: Poppins;
    line-height: 15px;
    letter-spacing: -0.02em;
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 259px;
    height: 50px;
    padding: 15px 30px 15px 50px;
    margin-right: 12px;
    font-size: ${({ theme }) => theme.fontSizes[2]};

    &::placeholder {
      font-size: ${({ theme }) => theme.fontSizes[2]};
      color: ${({ theme }) => theme.colors.white[200]};
    }
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 338px;
    height: 59px;
    margin-right: 0;
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.fontSizes[4]};
    padding: 18px 71px 18px 52px;

    &::placeholder {
      font-size: 18px;
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
  font-weight: 400;
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
    min-width: 187px;
    height: 50px;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes[3]};
    line-height: ${({ theme }) => theme.fontSizes[4]};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    min-width: 339px;
    height: 59px;

    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
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
    line-height: 27px;
    color: ${({ theme }) => theme.colors.white[200]};
    margin-bottom: 14px;
  }
`;

export const SubscribeText = styled.p`
  display: none;

  @media screen and (min-width: ${theme.breakpoints[2]}) {
  width: 339px;
  height: 36px;
    display: block;
    font-family: Poppins;
    font-size: ${({ theme }) => theme.fontSizes[2]};
    font-weight: 400;
    line-height: 18px;
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
