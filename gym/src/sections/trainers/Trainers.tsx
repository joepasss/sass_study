import { FC } from 'react';

import trainer1 from '../../img/trainers/trainer-1.jpg';
import trainer2 from '../../img/trainers/trainer-2.jpg';
import trainer3 from '../../img/trainers/trainer-3.jpg';
import trainer4 from '../../img/trainers/trainer-4.jpg';
import trainer5 from '../../img/trainers/trainer-5.jpg';
import trainer6 from '../../img/trainers/trainer-6.jpg';

export const Trainers: FC = () => {
  interface IContents {
    specialty: string;
    name: string;
    img: string;
  }

  const contents: IContents[] = [
    {
      specialty: 'BODYBUILDING COACH',
      name: 'DAVID SMITH',
      img: trainer1,
    },
    {
      specialty: 'CARDIO & CONDITIONING',
      name: 'AMARA MCGUIRE',
      img: trainer2,
    },
    {
      specialty: 'CROSSFIT EXPERT',
      name: 'WILLIAM DIXON',
      img: trainer3,
    },
    {
      specialty: 'CARDIO & CONDITIONING',
      name: 'MEDISON FRONING',
      img: trainer4,
    },
    {
      specialty: 'CROSSFIT EXPERT',
      name: 'IVY BULLOCK',
      img: trainer5,
    },
    {
      specialty: 'BODYBUILDING COACH',
      name: 'MATIE SIMMS JUNIOR',
      img: trainer6,
    },
  ];

  return (
    <section className='trainers'>
      <h2 className='trainers__title'>Meet Out Expert Trainers</h2>

      <div className='trainers__content'>
        {contents.map((item: IContents, index: number) => (
          <div className='trainers__content--card' key={index}>
            <h4 className='trainers__content--card__specialty'>
              {item.specialty}
            </h4>
            <h3 className='trainers__content--card__name'>{item.name}</h3>
            <img
              src={item.img}
              alt={item.name}
              className='trainers__content--card__img'
            />
          </div>
        ))}
      </div>
    </section>
  );
};
