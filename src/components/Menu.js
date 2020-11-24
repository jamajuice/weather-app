import PropTypes from "prop-types";
import MenuButton from './MenuButton';

const Menu = ({ selected, change }) => {
    return (
        <div className="menu">
            <MenuButton selected={selected} change={change} city="Ottawa" country="CA" />
            <MenuButton selected={selected} change={change} city="Moscow" country="RU" />
            <MenuButton selected={selected} change={change} city="Tokyo" country="JP" />
        </div>
    );
}

Menu.propTypes = {
    selected: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string 
    }),
    change: PropTypes.func
};

Menu.defaultProps = {
    selected: {},
    change: () => {}
};

export default Menu;