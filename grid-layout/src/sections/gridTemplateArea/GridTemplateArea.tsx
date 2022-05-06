import './gridTemplateArea.scss';
import { FC } from 'react';

export const GridTemplateArea: FC = () => {
  return (
    <div className='grid-container'>
      <header className='header'>Header</header>
      <section className='section-1'>Section-1</section>
      <section className='section-2'>Section-2</section>
      <section className='section-3'>Section-3</section>
      <section className='section-4'>Section-4</section>
      <section className='section-5'>Section-5</section>
      <section className='section-6'>Section-6</section>
      <footer className='footer'>Footer</footer>
    </div>
  );
};
