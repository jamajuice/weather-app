import PropTypes from "prop-types";

const WButton = ({ city, country, selected, change }) => {
    return (
        <button 
            type="button" 
            onClick={() => change(city, country)} 
            className={`btn${selected.city === city ? ' selected': ''}`}
        >
            {city}
        </button>
    );
}

WButton.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    selected: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string 
    }).isRequired,
    change: PropTypes.func.isRequired
};

export default WButton;