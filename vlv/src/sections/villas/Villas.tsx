import './villas.scss';
import { FC } from 'react';

export const Villas: FC = () => {
  return (
    <section id='villas'>
      <div className='villa villas-1'>
        <h2 className='villa-title'>Standard Villa</h2>
        <p className='villa-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          perspiciatis!
        </p>
        <a href='#' className='villa-link'>
          Starting at $200.00
        </a>
      </div>

      <div className='villa villas-2'>
        <h2 className='villa-title'>Superier Villa</h2>
        <p className='villa-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          perspiciatis!
        </p>
        <a href='#' className='villa-link'>
          Starting at $300.00
        </a>
      </div>

      <div className='villa villas-3'>
        <h2 className='villa-title'>Infinity Villa</h2>
        <p className='villa-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          perspiciatis!
        </p>
        <a href='#' className='villa-link'>
          Starting at $700.00
        </a>
      </div>

      <div className='villa villas-4'>
        <h2 className='villa-title'>Ultra Villa</h2>
        <p className='villa-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          perspiciatis!
        </p>
        <a href='#' className='villa-link'>
          Starting at $1100.00
        </a>
      </div>

      <div className='villa villas-5'>
        <h2 className='villa-title'>Galactic Villa</h2>
        <p className='villa-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          perspiciatis!
        </p>
        <a href='#' className='villa-link'>
          Starting at $1300.00
        </a>
      </div>

      <div className='villa villas-6'>
        <h2 className='villa-title'>Cosmic Villa</h2>
        <p className='villa-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          perspiciatis!
        </p>
        <a href='#' className='villa-link'>
          Starting at $2000.00
        </a>
      </div>
    </section>
  );
};
