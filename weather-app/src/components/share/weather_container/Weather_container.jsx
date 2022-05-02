import './weather_container.scss';
import PropTypes from 'prop-types';

function Weather_container({
  day,
  icon,
  highTemp,
  lowTemp,
  isToday,
  nowWeather,
  nowTemp,
  date,
}) {
  if (isToday) {
    return (
      <div>
        <p>{date}</p>
        <p>{nowWeather}</p>
        <div className='icon'>{icon}</div>
        <p>
          {nowTemp} <sup>&#8451;</sup>
        </p>
      </div>
    );
  }

  return (
    <div>
      <p>{day}</p>
      <div className='icon'>{icon}</div>
      <p>
        {highTemp} <sup>&#8451;</sup>
      </p>
      <p>
        {lowTemp} <sup>&#8451;</sup>
      </p>
    </div>
  );
}

Weather_container.propTypes = {
  day: PropTypes.string,
  icon: PropTypes.node,
  highTemp: PropTypes.number,
  lowTemp: PropTypes.number,
  isToday: PropTypes.bool,
  nowTemp: PropTypes.number,
  date: PropTypes.string,
};

export default Weather_container;
