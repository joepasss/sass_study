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

      <section id='booking-date'>
        <div className='schedule'>
          <div className='arrival'>
            <h5>Arrival</h5>
            <div>
              <p>May</p>
              <p>09</p>
              <p>&#65088;</p>
            </div>
          </div>

          <div className='departure'>
            <h5>departure</h5>
            <div>
              <p>May</p>
              <p>23</p>
              <p>&#65088;</p>
            </div>
          </div>

          <div className='guest'>
            <h5>Guestes</h5>
            <div>
              <p>&#65087;</p>
              <p>09</p>
              <p>&#65088;</p>
            </div>
          </div>
        </div>

        <div className='contact'>
          <a href='' className='context-link'>
            Make a Reservation
          </a>
          <p>Reservation Hotline</p>
          <p>+1-5263-8965-6547</p>
          <p>Reservation Assistance Available 24 Hours</p>
        </div>
      </section>
    </>
  );
};
