import PropTypes from "prop-types";

const WItem = (props) => {
    return (
        <> 
            <div className={`item ${props.type}`}>
                <div className="day">{props.data ? props.data.day : null}</div>
                <div className="img"><img src={props.data ? props.data.icon_path : null} alt="Weather Icon" /></div>
                <div className="temp">{props.data ? props.data.temp : null}</div>
            </div>
        </>
    );
}

WItem.propTypes = {
    type: PropTypes.string,
    data: PropTypes.shape({
        day: PropTypes.string,
        icon_path: PropTypes.string,
        temp: PropTypes.number,
    })
};

WItem.defaultProps = {
    type: "",
    data: {}
};



export default WItem;