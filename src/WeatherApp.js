import './WeatherApp.less';
import WButton from './components/WButton';

function WeatherApp() {
  return (
    <div className="weather-app">
      <div className='wave -one' />
      <div className='wave -two' />
      <div className='wave -three' />
      <div className='wave2 -one' />
      <div className='wave2 -two' />
      <div className='wave2 -three' />
      <div className="container">
        <div className="menu">
          <WButton text="Ottawa" />
          <WButton text="Moscow" />
          <WButton text="Tokyo" />
        </div>
        <div className="monitor">
          <div className="display lg">d</div>
          <div>
            <div className="display sm"> </div>
            <div className="display sm"> </div>
            <div className="display sm"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
