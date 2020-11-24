import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import './App.less';
import Menu from './components/Menu';
import ForecastMonitor from './components/ForecastMonitor';


function saveToLocalStorage(location) {
    localStorage.setItem("location", JSON.stringify(location));
}

function readFromLocalStorage() {
    const defaultLocation = { city: "Ottawa", country: "CA" };
    const storedLocation = localStorage.getItem("location");

    if(storedLocation) {
        return JSON.parse(storedLocation);
    }

    toast("🌞 J's Weather App 🌞", {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    
    saveToLocalStorage(defaultLocation);
    return defaultLocation;
}

const App = () => {
    const [location, setLocation] = useState(readFromLocalStorage());

    const changeLocation = (city, country) => {
        const newLocation = { city, country };
        setLocation(newLocation);
        saveToLocalStorage(newLocation);
    }

    return (
        <div className="weather-app">
            <ToastContainer />
            <div className="container">
                <Menu selected={location} change={changeLocation} />
                <ForecastMonitor location={location} />
            </div>
        </div>
    );
}

export default App;