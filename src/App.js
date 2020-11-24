import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import './App.less';
import WMenu from './components/WMenu';
import WMonitor from './components/WMonitor';


function saveToLocalStorage(location) {
    localStorage.setItem("location", JSON.stringify(location));
}

function readFromLocalStorage() {
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
    const defaultLocation = { city: "Ottawa", country: "CA" };
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
                <WMenu selected={location} change={changeLocation} />
                <WMonitor location={location} />
            </div>
        </div>
    );
}

export default App;