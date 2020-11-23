import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import './App.less';
import WMenu from './components/WMenu';
import WMonitor from './components/WMonitor';

const LOCAL_STORAGE_KEY = "location";

function saveToLocalStorage(location) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(location));
}

function readFromLocalStorage() {
    const storedLocation = localStorage.getItem(LOCAL_STORAGE_KEY);
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
    const defaultLocation = { city: "Ottawa", country: "CA" };
    saveToLocalStorage(defaultLocation)
    return { city: "Ottawa", country: "CA" };
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
                <WMenu selected={location} change={changeLocation} />
                <WMonitor location={location} />
            </div>
        </div>
    );
}

export default App;