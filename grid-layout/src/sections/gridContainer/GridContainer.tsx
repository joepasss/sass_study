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
      <div className='item item-8'>item-8</div>

      {/* div*4.item.item-$@9{Univited-$@9} */}
      <div className='item item-9'>Univited-9</div>
      <div className='item item-10'>Univited-10</div>
      <div className='item item-11'>Univited-11</div>
      <div className='item item-12'>Univited-12</div>
    </section>
  );
};
