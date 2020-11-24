import React from 'react';
import PropTypes from "prop-types";  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import WItem from './WItem';
import getWeather  from '../api/getWeather';

const WMonitor = ({ location }) => {

    const prepareData = (forecast) => {
        return forecast.data.map(day => {
            return {
                'day': moment().isSame(moment(day.datetime), 'day')  ? 'Today' : moment(day.datetime).format('ddd'),
                'icon_path': `https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`,
                'temp': Math.round(day.temp),
                'temp_text': day.weather.description
            }
        });
    };

    const [weatherData, setWeatherData] = React.useState([]);

    React.useEffect(() => {
        const getLocationWeather = async () => {
            const result = await getWeather(location);
            setWeatherData(result.success ? prepareData(result.data) : []);
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
        setWeatherData([]);
        setTimeout(() => { getLocationWeather(); }, 1000);
    }, [location]);

    return (
        <div className="monitor">
            <ToastContainer />
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