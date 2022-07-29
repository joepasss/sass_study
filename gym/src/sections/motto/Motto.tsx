import { FC } from 'react';

export const Motto: FC = () => {
  return (
    <section className='motto'>
      <div className='motto__content'>
        <i className='fab fa-accessible-icon'></i>
        <h2 className='motto__content--title'>Too Fit to Quit</h2>
        <p className='motto__content--para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit nisi
          rem, tenetur dolor ipsam maiores pariatur vero maxime quod.
        </p>
        <a href='#!' className='motto__content--link'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Find Out More
        </a>
      </div>

      <div className='motto__content'>
        <i className='fas fa-dumbbell'></i>
        <h2 className='motto__content--title'>Use it or Lose it</h2>
        <p className='motto__content--para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit nisi
          rem, tenetur dolor ipsam maiores pariatur vero maxime quod.
        </p>
        <a href='#!' className='motto__content--link'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Find Out More
        </a>
      </div>

      <div className='motto__content'>
        <i className='fas fa-medal'></i>
        <h2 className='motto__content--title'>No Pain, No Gain</h2>
        <p className='motto__content--para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et odit nisi
          rem, tenetur dolor ipsam maiores pariatur vero maxime quod.
        </p>
        <a href='#!' className='motto__content--link'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Find Out More
        </a>
      </div>
    </section>
  );
};
