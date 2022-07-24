import { FC, useState, useEffect } from 'react';

import logo from '../../img/logo/logo.svg';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggle = (opt: string) => {
    if (opt === 'Menu') {
      setIsOpen(!isOpen);
    } else {
      setIsDark(!isDark);
    }
  };

  useEffect(() => {
    let htmlElement = document.documentElement;

    const smoothTrans = () => {
      htmlElement.classList.add('transition');
      window.setTimeout(() => {
        htmlElement.classList.remove('transition');
      }, 1000);
    };

    if (isDark) {
      smoothTrans();
      htmlElement.setAttribute('data-theme', 'dark');
    } else {
      smoothTrans();
      htmlElement.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  return (
    <header className={isOpen ? 'header open' : 'header'}>
      {/* hamburger lines */}
      <div
        className={isOpen ? 'header__menu open' : 'header__menu'}
        onClick={() => toggle('Menu')}
      >
        <div className='header__menu--line'></div>
      </div>

      {/* Overlay */}
      <div
        className={isOpen ? 'header__overlay open' : 'header__overlay'}
      ></div>

      {/* Navigation */}
      <nav className={isOpen ? 'header__nav open' : 'header__nav'}>
        <a href='!#' className='header__nav--logo'>
          <img src={logo} alt='logo' />
        </a>

        <ul className='header__nav--links'>
          <li className='header__nav--links__item'>
            <a href='!#' data-text='Home'>
              Home
            </a>
          </li>

          <li className='header__nav--links__item'>
            <a href='!#' data-text='About'>
              About
            </a>
          </li>

          <li className='header__nav--links__item'>
            <a href='!#' data-text='Classes'>
              Classes
            </a>
          </li>

          <li className='header__nav--links__item'>
            <a href='!#' data-text='Events'>
              Events
            </a>
          </li>

          <li className='header__nav--links__item'>
            <a href='!#' data-text='News'>
              News
            </a>
          </li>

          <li className='header__nav--links__item'>
            <a href='!#' data-text='Shop'>
              Shop
            </a>
          </li>

          <div className='header__nav--links__toggle-container'>
            <input
              type='checkbox'
              id='toggle'
              name='theme'
              onClick={() => toggle('DarkMode')}
            />
          </div>
        </ul>
      </nav>
    </header>
  );
};
