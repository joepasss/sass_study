import './gallery.scss';
import { useState, useEffect, useRef, RefObject } from 'react';

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
  const listDom = useRef() as RefObject<HTMLUListElement>;

  useEffect(() => {
    const imgs = Array.from(listDom.current!.children) as HTMLElement[];

    const imgWidth = listDom.current!.children[0].getBoundingClientRect().width;

    // Arrainging the images to next to one another
    const setImgPostion = (img: HTMLElement, index: number) => {
      img.style.left = imgWidth * index + 'px';
    };

    imgs.forEach(setImgPostion);
  });

  // moveToImg Function
  const moveToImg = (distToMove: string, targetIndex: number) => {
    listDom.current!.style.transform = 'translateX(-' + distToMove + ')';
    setCurrent(targetIndex);
  };

  // move image to left (click right button)
  const moveLeft = () => {
    const currentImg = listDom.current!.querySelector(
      '.current--img'
    ) as HTMLElement;
    const nextImg = currentImg!.nextSibling as HTMLElement;

    // Move to the Next Image
    moveToImg(nextImg.style.left, current + 1);
  };

  const moveRight = () => {
    const currentImg = listDom.current!.querySelector(
      '.current--img'
    ) as HTMLElement;
    const prevImg = currentImg!.previousElementSibling as HTMLElement;

    // Move to the Prev Image
    moveToImg(prevImg.style.left, current - 1);
  };

  const carouselNav = (index: number) => {
    const destImg = listDom.current!.childNodes[index] as HTMLElement;

    moveToImg(destImg.style.left, index);
  };

  const buttons = [];

  for (let i = 0; i < 10; i++) {
    buttons.push(
      <button
        className='nav-btn'
        id={current === i ? 'current--img' : ''}
        onClick={() => carouselNav(i)}
        key={i}
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
        {/* button left */}
        {current !== 0 && (
          <button className='btn btn-left' onClick={() => moveRight()}>
            <FaCaretLeft size={50} color={'orange'} />
          </button>
        )}

        {/* image container */}
        <div className='img-container'>
          <ul className='list' ref={listDom}>
            {images.map((image: image, index: number) => {
              return (
                <li
                  className={current === index ? 'current--img item' : 'item'}
                  key={index}
                >
                  <img src={image.src} alt={image.src} />
                </li>
              );
            })}
          </ul>
        </div>

        {/* button right */}
        {current !== 9 && (
          <button className='btn btn-right' onClick={() => moveLeft()}>
            <FaCaretRight size={50} color={'orange'} />
          </button>
        )}

        {/* Carousel Nav */}
        <div className='carousel-nav'>{buttons}</div>
      </section>
    </>
  );
};
