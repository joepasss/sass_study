import './gridContainer.scss';

import { FC } from 'react';

export const GridContainer: FC = () => {
  return (
    <section className='grid-container'>
      <div className='item item-1'>I</div>
      <div className='item item-2'>was</div>
      {/* <div className='item item-3'>written</div> */}
      <div className='item item-3'>written or shown</div>
      <div className='item item-4'>here</div>
      <div className='item item-5'>to</div>
      <div className='item item-6'>have</div>
      {/* <div className='item item-7'>some</div> */}
      <div className='item item-7'>something messed up here </div>
      {/* <div className='item item-7'>
        somethingmesseduphere{' '}
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
          nesciunt non, laborum ex aspernatur ipsam et sed repudiandae
          distinctio praesentium!
        </p>
      </div> */}
      <div className='item item-8'>fun</div>
    </section>
  );
};
