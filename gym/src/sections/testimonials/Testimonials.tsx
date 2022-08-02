import { FC, useState } from 'react';

// images
import testimonial1 from '../../img/testimonials/testimonial-1.jpg';
import testimonial2 from '../../img/testimonials/testimonial-2.jpg';
import testimonial3 from '../../img/testimonials/testimonial-3.jpg';

export const Testimonials: FC = () => {
  const [selected, setSelected] = useState<number>(0);

  const slideContent = [
    {
      name: 'Natasha Barton',
      para: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates?"',
    },
    {
      name: 'Ryan Cavill',
      para: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates?"',
    },
    {
      name: 'Sandra Rogers',
      para: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptates?"',
    },
  ];

  const indicatorContent = [testimonial1, testimonial2, testimonial3];

  return (
    <section className='testimonials'>
      <h2 className='testimonials__title'>Testimonials</h2>
      <div className='testimonials__content'>
        <div className='testimonials__content--slider'>
          {slideContent.map((item, index: number) => (
            <div
              className={
                selected === index
                  ? 'testimonials__content--slider__slide active'
                  : 'testimonials__content--slider__slide'
              }
              key={index}
            >
              <p className='testimonials__content--slider__slide--para'>
                {item.para}
              </p>
              <h3 className='testimonials__content--slider__slide--title'>
                {item.name}
              </h3>
            </div>
          ))}

          <div className='testimonials__content--indicator'>
            {indicatorContent.map((item: string, index: number) => (
              <img
                src={item}
                alt={`testimonial-${index}`}
                key={index}
                data-id={index}
                className={
                  selected === index
                    ? 'testimonials__content--indicator--img active'
                    : 'testimonials__content--indicator--img'
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
