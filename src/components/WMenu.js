import PropTypes from "prop-types";
import WButton from './WButton';

const WMenu = ({ selected, change }) => {
    return (
        <div className="menu">
            <WButton selected={selected} change={change} city="Ottawa" country="CA" />
            <WButton selected={selected} change={change} city="Moscow" country="RU" />
            <WButton selected={selected} change={change} city="Tokyo" country="JP" />
        </div>
    );
}

WMenu.propTypes = {
    selected: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string 
    }),
    change: PropTypes.func
};

WMenu.defaultProps = {
    selected: {},
    change: () => {}
};

export default WMenu;