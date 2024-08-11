import { StyledTitle } from "./MainPageTitle.styled";
import PropTypes from 'prop-types'; 

export const MainPageTitle = ({ title, isLink = false }) => {
    if (!title) {
        console.error("Brak tytułu dla MainPageTitle");
        return null;
    }
    return <StyledTitle $isLink={isLink}>{title}</StyledTitle>
};



MainPageTitle.propTypes = {
    title: PropTypes.string.isRequired, // Możesz też dodać isRequired, aby upewnić się, że title zawsze jest przekazany
    isLink: PropTypes.bool,
};
