import { StyledTitle } from "./MainPageTitle.styled";
import PropTypes from 'prop-types';

export const MainPageTitle = ({ title, isLink = false }) => {
    return <StyledTitle isLink={isLink}>{title}</StyledTitle>
};

MainPageTitle.propTypes = {
    title: PropTypes.string,
    isLink: PropTypes.bool,
};