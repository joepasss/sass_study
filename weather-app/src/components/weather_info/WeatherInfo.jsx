import './weatherinfo.scss';

import Weather_container from '../share/weather_container/Weather_container';
import { FaSun } from 'react-icons/fa';

function WeatherInfo() {
  return (
    <div className='weather__info'>
      <Weather_container
        isToday={true}
        date='Thursday, Apr 30'
        nowWeather='Sunny'
        icon={<FaSun />}
        nowTemp={24}
      />
      <div className='weather__info--data'>
        <p>Percipitation: 10%</p>
        <p>Humidity: 5%</p>
        <p>Wind: 4 kpm NW</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
