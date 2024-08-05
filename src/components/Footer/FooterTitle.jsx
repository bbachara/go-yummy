import { ReactComponent as Logo } from '../../assets/SVG/Logo/logoInv.svg';

import { TitleBlock, Title, SvgWrapper } from './Footer.styled';

export const FooterTitle = () => {
  return (
    <TitleBlock>
      <SvgWrapper to="/">
        <Logo />
      </SvgWrapper>
      <Title>So Yummy</Title>
    </TitleBlock>
  );
};
