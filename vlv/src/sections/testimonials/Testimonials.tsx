import './testimonials.scss';

import testi1 from '../../assets/img/Testimonials/testimonials-1.jpg';
import testi2 from '../../assets/img/Testimonials/testimonials-2.jpg';
import testi3 from '../../assets/img/Testimonials/testimonials-3.jpg';
import testi4 from '../../assets/img/Testimonials/testimonials-4.jpg';
import testi5 from '../../assets/img/Testimonials/testimonials-5.jpg';
import testi6 from '../../assets/img/Testimonials/testimonials-6.jpg';

type data = {
  imgSrc: string;
  imgAlt: string;
  name: string;
  para: string;
};

export const Testimonials = () => {
  const testimonialsData: data[] = [
    {
      imgSrc: testi1,
      imgAlt: 'testimonial-1',
      name: 'Clark Lois',
      para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, magni.',
    },
    {
      imgSrc: testi2,
      imgAlt: 'testimonial-2',
      name: 'Clark Lois',
      para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, magni.',
    },
    {
      imgSrc: testi3,
      imgAlt: 'testimonial-3',
      name: 'Clark Lois',
      para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, magni.',
    },
    {
      imgSrc: testi4,
      imgAlt: 'testimonial-4',
      name: 'Clark Lois',
      para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, magni.',
    },
    {
      imgSrc: testi5,
      imgAlt: 'testimonial-5',
      name: 'Clark Lois',
      para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, magni.',
    },
    {
      imgSrc: testi6,
      imgAlt: 'testimonial-6',
      name: 'Clark Lois',
      para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, magni.',
    },
  ];

  return (
    <section id='testimonials'>
      {testimonialsData.map((item: data, index: number) => {
        return (
          <div className='card' key={index}>
            <div className='front'>
              <img src={item.imgSrc} alt={item.imgAlt} />
              <h2>{item.name}</h2>
            </div>

            <div className='back'>
              <p>{item.para}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
