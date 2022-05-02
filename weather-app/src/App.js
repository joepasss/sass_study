<<<<<<< HEAD
import {
  FaSun,
  FaCloudSun,
  FaWind,
  FaCloudSunRain,
  FaCloudShowersHeavy,
  FaCloudMeatball,
} from 'react-icons/fa';
=======
import Header from './components/header/Header';
import Weather_container from './components/share/weather_container/Weather_container';
import WeatherInfo from './components/weather_info/WeatherInfo';
>>>>>>> main

function App() {
  return (
    <div>
      <section id='weather'>
<<<<<<< HEAD
        <h1>Sydney, Australia</h1>
        {/* Weather info */}
        <div className='weather__info__temp'>
          <div className='weather__info'>
            <div className='weather__info--date'>
              <p>Thursday, Apr 30</p>
              <p>Sunny</p>
              <div className='weather__info--date__icon__temp'>
                <FaSun className='icons' />
                <p>
                  24 <sup>&#8451;</sup>
                </p>
              </div>
            </div>
            <div className='weather__info--data'>
              <p>Percipitation: 10%</p>
              <p>Humidity: 5%</p>
              <p>Wind: 4 kpm NW</p>
            </div>
          </div>

          {/* Weather temp */}
          <div className='weather__temp'>
            <div className='weather__temp--moday'>
              <p>Monday</p>
              <FaCloudSun className='icons' />
              <p>
                23 <sup>&#8451;</sup>
              </p>
              <p>
                18 <sup>&#8451;</sup>
              </p>
            </div>
            <div className='weather__temp--tuesday'>
              <p>Tuesday</p>
              <FaSun className='icons' />
              <p>
                26 <sup>&#8451;</sup>
              </p>
              <p>
                21 <sup>&#8451;</sup>
              </p>
            </div>
            <div className='weather__temp--wednesday'>
              <p>Wednesday</p>
              <FaWind className='icons' />
              <p>
                20 <sup>&#8451;</sup>
              </p>
              <p>
                16 <sup>&#8451;</sup>
              </p>
            </div>
            <div className='weather__temp--thursday'>
              <p>Thursday</p>
              <FaCloudSunRain className='icons' />
              <p>
                18 <sup>&#8451;</sup>
              </p>
              <p>
                16 <sup>&#8451;</sup>
              </p>
            </div>
            <div className='weather__temp--friday'>
              <p>Friday</p>
              <FaCloudShowersHeavy className='icons' />
              <p>
                23 <sup>&#8451;</sup>
              </p>
              <p>
                18 <sup>&#8451;</sup>
              </p>
            </div>
            <div className='weather__temp--saturday'>
              <p>Saturday</p>
              <FaCloudSun className='icons' />
              <p>
                14 <sup>&#8451;</sup>
              </p>
              <p>
                10 <sup>&#8451;</sup>
              </p>
            </div>
            <div className='weather__temp--sunday'>
              <p>Sunday</p>
              <FaCloudMeatball className='icons' />
              <p>
                23 <sup>&#8451;</sup>
              </p>
              <p>
                18 <sup>&#8451;</sup>
              </p>
            </div>
=======
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
>>>>>>> main
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
