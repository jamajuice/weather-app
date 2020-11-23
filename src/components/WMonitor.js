import React from 'react';
import PropTypes from "prop-types";
import moment from 'moment';
import WItem from './WItem';
import getWeather  from '../api/getWeather';

const WMonitor = ({ location }) => {

    const prepareData = (forecast) => {
        return forecast.data.map(day => {
            return {
                'day': moment().isSame(moment(day.datetime), 'day')  ? 'Today' : moment(day.datetime).format('ddd'),
                'icon_path': `https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`,
                'temp': Math.round(day.high_temp),
                'temp_text': day.weather.description
            }
        });
    };

    const [weatherData, setWeatherData] = React.useState([]);
    const [apiError, setApiError] = React.useState("");

    React.useEffect(() => {
        const requestTimeout = setTimeout(() => {}, 2000);
        const getLocationWeather = async () => {
            const result = await getWeather(location);
            clearTimeout(requestTimeout);
            setWeatherData(result.success ? prepareData(result.data) : []);
            setApiError(result.success ? "" : result.error);
        };
        setWeatherData([]);
        setTimeout(() => { getLocationWeather(); }, 1000);
        return () => clearTimeout(requestTimeout);
    }, [location]);

    return (
        <div className="monitor">
            {apiError ? null : <div className="error">{apiError}</div>}
            <div className="header">
                <WItem type="lg" data={weatherData[0]} />
            </div>
            <div className="footer">
                <WItem type="sm" data={weatherData[1]} />
                <WItem type="sm" data={weatherData[2]} />
                <WItem type="sm" data={weatherData[3]} />
                <WItem type="sm" data={weatherData[4]} />
            </div>
        </div>
    );
}

WMonitor.propTypes = {
    location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string
    })
};

WMonitor.defaultProps = {
    location: {}
};

export default WMonitor;