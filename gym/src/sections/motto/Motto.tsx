import { FC } from 'react';

export const Motto: FC = () => {
  interface ContentTypes {
    icons: string;
    titles: string;
    paras: string;
  }

  const contents: ContentTypes[] = [
    {
      icons: 'fab fa-accessible-icon',
      titles: 'Too Fit to Quit',
      paras:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita numquam, delectus labore molestiae recusandae temporibus.',
    },
    {
      icons: 'fas fa-dumbbell',
      titles: 'Use it or Lose it',
      paras:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita numquam, delectus labore molestiae recusandae temporibus.',
    },
    {
      icons: 'fas fa-medal',
      titles: 'No pain, No Gain',
      paras:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita numquam, delectus labore molestiae recusandae temporibus.',
    },
  ];

  return (
    <section className='motto'>
      {contents.map((item: ContentTypes) => (
        <div className='motto__content'>
          <i className={item.icons} />
          <h2 className='motto__content--title'>{item.titles}</h2>
          <p className='motto__content--para'>{item.paras}</p>

          <a href='#!' className='motto__content--link'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Find Out More
          </a>
        </div>
      ))}
    </section>
  );
};
