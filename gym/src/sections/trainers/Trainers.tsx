import { FC } from 'react';

// Images
import trainer_1 from '../../img/trainers/trainer-1.jpg';
import trainer_2 from '../../img/trainers/trainer-2.jpg';
import trainer_3 from '../../img/trainers/trainer-3.jpg';
import trainer_4 from '../../img/trainers/trainer-4.jpg';
import trainer_5 from '../../img/trainers/trainer-5.jpg';
import trainer_6 from '../../img/trainers/trainer-6.jpg';

export const Trainers: FC = () => {
  interface Itrainers {
    specialty: string;
    name: string;
    img: string;
  }

  const trainers: Itrainers[] = [
    {
      specialty: 'BODYBUILDING COACH',
      name: 'DAVID SMITH',
      img: trainer_1,
    },
    {
      specialty: 'CARDIO & CONDITIONING',
      name: 'AMARA MCGUIRE',
      img: trainer_2,
    },
    {
      specialty: 'CROSSFIT EXPERT',
      name: 'WILLIAM DIXON',
      img: trainer_3,
    },
    {
      specialty: 'CARDIO & CONDITIONING',
      name: 'MADISON FRONING',
      img: trainer_4,
    },
    {
      specialty: 'CROSSFIT EXPERT',
      name: 'IVY BULLOCK',
      img: trainer_5,
    },
    {
      specialty: 'BODYBUILDING COACH',
      name: 'MATIE SIMMS JUNIOR',
      img: trainer_6,
    },
  ];

  return (
    <section className='trainers'>
      <h2 className='trainers__title'>Meet Our Expert Trainers</h2>

      <div className='trainers__content'>
        {trainers.map((item: Itrainers) => (
          <div className='trainers__content--card'>
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
