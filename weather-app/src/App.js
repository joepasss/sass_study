import { FaSun } from 'react-icons/fa';

function App() {
  return (
    <div>
      <section id='weather'>
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
        </div>
      </section>
    </div>
  );
}

export default App;
