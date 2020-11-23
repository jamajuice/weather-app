import { useState } from "react";
import './App.less';
import WMenu from './components/WMenu';
import WMonitor from './components/WMonitor';

const LOCAL_STORAGE_KEY = "location";

function saveToLocalStorage(location) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(location));
}

function readFromLocalStorage() {
    const storedLocation = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedLocation ? JSON.parse(storedLocation) : { city: "Ottawa", country: "CA" };
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
            <div className="container">
                <WMenu selected={location} change={changeLocation} />
                <WMonitor location={location} />
            </div>
        </div>
    );
}

export default App;