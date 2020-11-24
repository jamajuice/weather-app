import PropTypes from "prop-types";

const MenuButton = ({ city, country, selected, change }) => {
    return (
        <button 
            type="button" 
            onClick={() => change(city, country)} 
            disabled={selected.city === city}
            className={`btn${selected.city === city ? ' selected': ''}`}
        >
            {city}
        </button>
    );
}

MenuButton.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    selected: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string 
    }).isRequired,
    change: PropTypes.func.isRequired
};

export default MenuButton;