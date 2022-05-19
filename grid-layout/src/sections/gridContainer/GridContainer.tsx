import './gridContainer.scss';
import { FC } from 'react';

export const GridContainer: FC = () => {
  return (
    <section className='grid-container'>
      <div className='item item-1'>item-1</div>
      <div className='item item-2'>item-2</div>
      <div className='item item-3'>item-3</div>
      <div className='item item-4'>item-4</div>
      <div className='item item-5'>item-5</div>
      <div className='item item-6'>item-6</div>
      <div className='item item-7'>item-7</div>
    </section>
  );
};
