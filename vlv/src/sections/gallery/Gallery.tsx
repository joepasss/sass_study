import './gallery.scss';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

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

export const Gallery = () => {
  const images = [
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

  return (
    <>
      <section id='gallery-text'>
        <div className='content'>
          <h2 className='title'>Gallery</h2>
        </div>
      </section>

      <section id='gallery-carousel'>
        {/* button left */}
        <button className='btn btn-left'>
          <FaCaretLeft size={40} />
        </button>

        {/* image container */}
        <div className='img-container'>
          <ul className='list'>
            {images.map((image) => {
              return (
                <li className='item'>
                  <img src={image.src} alt={image.src} />
                </li>
              );
            })}
          </ul>
        </div>

        {/* button right */}
        <button className='btn btn-right'>
          <FaCaretRight size={40} />
        </button>

        {/* Carousel Nav */}
        <div className='carousel-nav'>
          <button className='nav-btn current--img'></button>
          <button className='nav-btn'></button>
          <button className='nav-btn'></button>
          <button className='nav-btn'></button>
          <button className='nav-btn'></button>
          <button className='nav-btn'></button>
          <button className='nav-btn'></button>
          <button className='nav-btn'></button>
          <button className='nav-btn'></button>
          <button className='nav-btn'></button>
        </div>
      </section>
    </>
  );
};
