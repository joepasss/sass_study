import './gallery.scss';

import villa_1 from '../../assets/img/Gallery/gallery-1.jpg';
import villa_2 from '../../assets/img/Gallery/gallery-2.jpg';
import villa_3 from '../../assets/img/Gallery/gallery-3.jpg';
import villa_4 from '../../assets/img/Gallery/gallery-4.jpg';
import villa_5 from '../../assets/img/Gallery/gallery-5.jpg';
import villa_6 from '../../assets/img/Gallery/gallery-6.jpg';
import villa_7 from '../../assets/img/Gallery/gallery-7.jpg';
import villa_8 from '../../assets/img/Gallery/gallery-8.jpg';
import villa_9 from '../../assets/img/Gallery/gallery-9.jpg';
import villa_10 from '../../assets/img/Gallery/gallery-10.jpg';

type image = {
  src: string;
  alt: string;
};

export const Gallery = () => {
  const images: image[] = [
    {
      src: villa_1,
      alt: 'villa-1',
    },
    {
      src: villa_2,
      alt: 'villa-2',
    },
    {
      src: villa_3,
      alt: 'villa-3',
    },
    {
      src: villa_4,
      alt: 'villa-4',
    },
    {
      src: villa_5,
      alt: 'villa-5',
    },
    {
      src: villa_6,
      alt: 'villa-6',
    },
    {
      src: villa_7,
      alt: 'villa-7',
    },
    {
      src: villa_8,
      alt: 'villa-8',
    },
    {
      src: villa_9,
      alt: 'villa-9',
    },
    {
      src: villa_10,
      alt: 'villa-10',
    },
  ];

  const buttons = [];
  for (let i = 0; i < 10; i++) {
    buttons.push(<button className='nav-btn' key={i} />);
  }

  return (
    <>
      <section id='gallery-text'>
        <div className='content'>
          <h2 className='title'>Gallery</h2>
        </div>
      </section>

      <section id='gallery-carousel'>
        <button className='btn btn-left'>&lt;</button>

        <div className='img-container'>
          <ul className='list'>
            {images.map((img: image, index: number) => {
              return (
                <li className='item' key={index}>
                  <img src={img.src} alt={img.alt} />
                </li>
              );
            })}
          </ul>
        </div>

        <button className='btn btn-right'>&gt;</button>

        <div className='carousel-nav'>{buttons}</div>
      </section>
    </>
  );
};
