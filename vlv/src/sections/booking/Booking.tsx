import './booking.scss';
import { FC } from 'react';
import { FaSun, FaClock } from 'react-icons/fa';

export const Booking: FC = () => {
  return (
    <>
      <section id='booking-content'>
        <h2 className='content-title'>Discover Serenity</h2>
        <p className='content-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          doloremque velit alias dolorum veritatis debitis provident molestias,
          impedit voluptatibus nihil ut natus voluptatem quidem modi? Minima
          eveniet laboriosam inventore est.
        </p>
        <div className='icons'>
          <div className='icons-weather'>
            <FaSun className='icon' />
            <p>
              24 <sup>&#8451;</sup>
            </p>
          </div>
          <div className='icons-time'>
            <FaClock className='icon' />
            <p>05:00 PM</p>
          </div>
        </div>
      </section>

      <section id='booking-date'>Booking Date</section>
    </>
  );
};
