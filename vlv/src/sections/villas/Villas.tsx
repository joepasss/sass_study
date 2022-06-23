import './villas.scss';
import { FC } from 'react';

export const Villas: FC = () => {
  return (
    <section id='villas'>
      <div className='villa villa-1'>
        <h2 className='villa-title'>Standard Villa</h2>
        <p className='villa-para'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam totam
          quidem quam culpa asperiores repudiandae, aut corrupti adipisci itaque
          praesentium dolorem laboriosam quis quia deserunt?
        </p>
        <a href='#!' className='villa-link'>
          Starting at $300.00
        </a>
      </div>

      <div className='villa villa-2'>
        <h2 className='villa-title'>Superier Villa</h2>
        <p className='villa-para'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam totam
          quidem quam culpa asperiores repudiandae, aut corrupti adipisci itaque
          praesentium dolorem laboriosam quis quia deserunt?
        </p>
        <a href='#!' className='villa-link'>
          Starting at $350.00
        </a>
      </div>

      <div className='villa villa-3'>
        <h2 className='villa-title'>Infinity Villa</h2>
        <p className='villa-para'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam totam
          quidem quam culpa asperiores repudiandae, aut corrupti adipisci itaque
          praesentium dolorem laboriosam quis quia deserunt?
        </p>
        <a href='#!' className='villa-link'>
          Starting at $700.00
        </a>
      </div>

      <div className='villa villa-4'>
        <h2 className='villa-title'>Ultra Villa</h2>
        <p className='villa-para'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam totam
          quidem quam culpa asperiores repudiandae, aut corrupti adipisci itaque
          praesentium dolorem laboriosam quis quia deserunt?
        </p>
        <a href='#!' className='villa-link'>
          Starting at $1100.00
        </a>
      </div>

      <div className='villa villa-5'>
        <h2 className='villa-title'>Galactic Villa</h2>
        <p className='villa-para'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam totam
          quidem quam culpa asperiores repudiandae, aut corrupti adipisci itaque
          praesentium dolorem laboriosam quis quia deserunt?
        </p>
        <a href='#!' className='villa-link'>
          Starting at $1300.00
        </a>
      </div>

      <div className='villa villa-6'>
        <h2 className='villa-title'>Cosmic Villa</h2>
        <p className='villa-para'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam totam
          quidem quam culpa asperiores repudiandae, aut corrupti adipisci itaque
          praesentium dolorem laboriosam quis quia deserunt?
        </p>
        <a href='#!' className='villa-link'>
          Starting at $2000.00
        </a>
      </div>
    </section>
  );
};
