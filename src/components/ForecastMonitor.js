import React from 'react';
import PropTypes from "prop-types";  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import ForecastDay from './ForecastDay';
import getWeather  from '../api/getWeather';

const ForecastMonitor = ({ location }) => {

    const formatData = (forecast) => {
        return forecast.data.map(day => {
            return {
                'day': moment().isSame(moment(day.datetime), 'day')  ? 'Today' : moment(day.datetime).format('ddd'),
                'icon_path': `https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`,
                'temp': Math.round(day.temp),
                'temp_text': day.weather.description
            }
        });
    };

    const [forecastData, setForecastData] = React.useState([]);

    React.useEffect(() => {
        const getLocationForecast = async () => {
            const result = await getWeather(location);
            setForecastData(result.success ? formatData(result.data) : []);
            if(!result.success) {
                toast.error(`Error! ${result.error}`, {
                    position: "top-right",
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        };
        setForecastData([]);
        setTimeout(() => { getLocationForecast(); }, 1000);
    }, [location]);

    return (
        <div className="monitor">
            <ToastContainer />
            <div className="header">
                <ForecastDay type="lg" data={forecastData[0]} />
            </div>
            <div className="footer">
                <ForecastDay type="sm" data={forecastData[1]} />
                <ForecastDay type="sm" data={forecastData[2]} />
                <ForecastDay type="sm" data={forecastData[3]} />
                <ForecastDay type="sm" data={forecastData[4]} />
            </div>
        </div>
    );
}

ForecastMonitor.propTypes = {
    location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string
    })
};

ForecastMonitor.defaultProps = {
    location: {}
};

export default ForecastMonitor;