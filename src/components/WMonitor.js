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
                'temp': Math.round(day.high_temp)
            }
        });
    };

    const [weatherData, setWeatherData] = React.useState([]);
    const [apiError, setApiError] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        const loadingIndicatorTimeout = setTimeout(() => setIsLoading(true), 500);
        const getLocationWeather = async () => {
            const result = await getWeather(location);
            clearTimeout(loadingIndicatorTimeout);
            setIsLoading(false);
            setWeatherData(result.success ? prepareData(result.data) : []);
            setApiError(result.success ? "" : result.error);
        };
        getLocationWeather();
        return () => clearTimeout(loadingIndicatorTimeout);
    }, [location]);

    return (
        <div className="monitor">
            {apiError ? null : <div className="error">{apiError}</div>}
            <div className="header">
                {isLoading ? null : <WItem type="lg" data={weatherData[0]} />}
            </div>
            <div className="footer">
                {isLoading ? null : <WItem type="sm" data={weatherData[1]} />}
                {isLoading ? null : <WItem type="sm" data={weatherData[2]} />}
                {isLoading ? null : <WItem type="sm" data={weatherData[3]} />}
                {isLoading ? null : <WItem type="sm" data={weatherData[4]} />}
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