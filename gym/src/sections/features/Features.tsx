import { FC } from 'react';

export const Features: FC = () => {
  const titles: string[] = [
    'Prograssion',
    'Power Yoga',
    'Workout',
    'Efficiency',
    'Nutrition',
    'Cardio Program',
    'Pure Strength',
    'Functionnality',
    'True Challenge',
  ];

  return (
    <section className='features'>
      {titles.map((item: string) => (
        <div className='features__content'>
          <h2 className='features__content--title'>{item}</h2>
          <p className='features__content--para'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
            totam.
          </p>
          <a href='#!' className='features__content--link'>
            Read More
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      ))}
    </section>
  );
};
