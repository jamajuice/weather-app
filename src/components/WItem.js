import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';


const WItem = ({ type, data }) => {
    const hasData =  Object.keys(data).length !== 0;

    return (
        <div className={`item ${type}`}>
            <div className="day">{hasData ? data.day : <Skeleton width="100%" height="100%" />}</div>
            <div className="info">
                <div className="icon-container">
                    <div className="img">
                        {hasData ? (
                            <img 
                                src={hasData ? data.icon_path : null} 
                                alt="Weather Icon" 
                            />
                        ) : ( 
                            <Skeleton circle height={type === "lg" ? 120 : 50} width={type === "lg" ? 120 : 50} />
                        )}
                    </div>
                </div>
                <div className={`temp-container${ hasData ? '' : ' loading'}`}>
                    <div className="temp">
                        {hasData ? data.temp : <Skeleton width="100%" height="100%" />}
                        {hasData ? ( <span>&#176;</span> ) : null}
                    </div>
                    {data && data.temp_text && type === "lg" ? <div className="temp-text">{data.temp_text}</div> : null }
                </div>
            </div>
        </div>
    );
}

WItem.propTypes = {
    type: PropTypes.string,
    data: PropTypes.shape({
        day: PropTypes.string,
        icon_path: PropTypes.string,
        temp: PropTypes.number,
        temp_text: PropTypes.string,
    })
};

WItem.defaultProps = {
    type: "",
    data: {}
};



export default WItem;