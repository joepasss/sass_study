import {
  FaSun,
  FaCloudSun,
  FaWind,
  FaCloudSunRain,
  FaCloudShowersHeavy,
  FaCloudMeatball,
} from 'react-icons/fa';
import Header from './components/header/Header';
import Weather_container from './components/share/weather_container/Weather_container';
import WeatherInfo from './components/weather_info/WeatherInfo';

function App() {
  return (
    <div>
      <section id='weather'>
        <Header />
        {/* Weather info */}
        <div className='weather__info__temp'>
          <WeatherInfo />

          {/* Weather temp */}
          <div className='weather__temp'>
            <Weather_container
              day='Monday'
              icon={<FaCloudSun />}
              highTemp={23}
              lowTemp={18}
            />
            <Weather_container
              day='Tuesday'
              icon={<FaSun />}
              highTemp={23}
              lowTemp={18}
            />
            <Weather_container
              day='Wednesday'
              icon={<FaWind />}
              highTemp={23}
              lowTemp={18}
            />
            <Weather_container
              day='Thursday'
              icon={<FaCloudSunRain />}
              highTemp={23}
              lowTemp={18}
            />
            <Weather_container
              day='Friday'
              icon={<FaCloudShowersHeavy />}
              highTemp={23}
              lowTemp={18}
            />
            <Weather_container
              day='Saturday'
              icon={<FaCloudSun />}
              highTemp={23}
              lowTemp={18}
            />
            <Weather_container
              day='Sunday'
              icon={<FaCloudMeatball />}
              highTemp={23}
              lowTemp={18}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
