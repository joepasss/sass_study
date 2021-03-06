import { FC } from 'react';

export const Showcase: FC = () => {
  return (
    <section className='showcase'>
      <div className='showcase__content'>
        <h1 className='showcase__content--title'>Commit to be fit</h1>
        <p className='showcase__content--para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
          harum!
        </p>
        <div className='showcase__content--links'>
          <a href='#!'>Find out more</a>
          <a href='#!'>Join Now</a>
        </div>
      </div>
    </section>
  );
};
