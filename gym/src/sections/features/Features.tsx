import { FC } from 'react';

export const Features: FC = () => {
  const featureContent = [
    {
      title: 'Progression',
    },
    {
      title: 'Power Yoga',
    },
    {
      title: 'Workout',
    },
    {
      title: 'Efficiency',
    },
    {
      title: 'Nutrition',
    },
    {
      title: 'Cardio Program',
    },
    {
      title: 'Pure Strength',
    },
    {
      title: 'Functionnality',
    },
    {
      title: 'True Challenge',
    },
  ];

  return (
    <section className='features'>
      {featureContent.map((item) => (
        <div className='features__content'>
          <h2 className='features__content--title'>{item.title}</h2>
          <p className='features__content--para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            molestiae?
          </p>
          <a href='#!' className='features__content--lik'>
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
