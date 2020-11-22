import React from "react";
import './App.less';
import WMenu from './components/WMenu';
import WMonitor from './components/WMonitor';

/* const LOCAL_STORAGE_KEY = "location";
function saveToLocalStorage(location) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(location));
}

function readFromLocalStorage() {
    const storedLocation = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedLocation ? JSON.parse(storedLocation) : [];
} */

const App = () => {
    const [location, setLocation] = React.useState({ city: "Ottawa", country: "CA" });

    const changeLocation = (city, country) => {
        setLocation({ city, country });
    }
    // component mounts
    // get location from storage
    // if none send default or else send clicked location 


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