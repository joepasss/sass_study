import './gallery.scss';
import { useState, useEffect, useRef, RefObject } from 'react';

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

  const [current, setCurrent] = useState<number>(0);
  const list = useRef() as RefObject<HTMLUListElement>;

  useEffect(() => {
    const imgWidth: number =
      list.current!.children[0].getBoundingClientRect().width;

    const setImgPosition = (img: HTMLElement, index: number) => {
      img.style.left = imgWidth * index + 'px';
    };

    const imgs = Array.from(list.current!.children) as HTMLElement[];

    imgs.forEach(setImgPosition);
  });

  const moveToImg = (distToMove: string, targetIndex: number) => {
    list.current!.style.transform = 'translateX(-' + distToMove + ')';
    setCurrent(targetIndex);
  };

  const btnClick = (index: number) => {
    const destImg = list.current!.childNodes[index] as HTMLElement;

    moveToImg(destImg.style.left, index);
  };

  const buttons = [];
  for (let i = 0; i < 10; i++) {
    buttons.push(
      <button
        className='nav-btn'
        key={i}
        onClick={() => {
          btnClick(i);
        }}
        id={current === i ? 'current--img' : ''}
      />
    );
  }

  return (
    <>
      <section id='gallery-text'>
        <div className='content'>
          <h2 className='title'>Gallery</h2>
        </div>
      </section>

      <section id='gallery-carousel'>
        {current !== 0 && (
          <button
            className='btn btn-left'
            onClick={() => {
              btnClick(current - 1);
            }}
          >
            &lt;
          </button>
        )}

        <div className='img-container'>
          <ul className='list' ref={list}>
            {images.map((img: image, index: number) => {
              return (
                <li
                  className={current === index ? 'current--img item' : 'item'}
                  key={index}
                >
                  <img src={img.src} alt={img.alt} />
                </li>
              );
            })}
          </ul>
        </div>

        {current !== 9 && (
          <button
            className='btn btn-right'
            onClick={() => {
              btnClick(current + 1);
            }}
          >
            &gt;
          </button>
        )}

        <div className='carousel-nav'>{buttons}</div>
      </section>
    </>
  );
};
