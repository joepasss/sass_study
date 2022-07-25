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
    const htmlElement = document.documentElement;

    const smoothTrans = () => {
      htmlElement.classList.add('transition');

      window.setTimeout(() => {
        htmlElement.classList.remove('transition');
      }, 1000);
    };

    smoothTrans();

    if (isDark) {
      htmlElement.setAttribute('data-theme', 'dark');
    } else {
      htmlElement.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  return (
    <header className='header'>
      {/* Hamburger lines */}
      <div
        className={isOpen ? 'header__menu menu_open' : 'header__menu'}
        onClick={() => toggle('Menu')}
      >
        <div className='header__menu--line'></div>
      </div>

      {/* Overlay */}
      <div
        className={isOpen ? 'header__overlay overlay_open' : 'header__overlay'}
      ></div>

      <nav className={isOpen ? 'header__nav nav_open' : 'header__nav'}>
        <a href='#!' className='header__nav--logo'>
          <img src={logo} alt='LOGO' />
        </a>

        <ul className='header__nav--links'>
          <li className='header__nav--links__item'>
            <a href='#!' data-text='Home'>
              Home
            </a>
          </li>

          <li className='header__nav--links__item'>
            <a href='#!' data-text='About'>
              About
            </a>
          </li>

          <li className='header__nav--links__item'>
            <a href='#!' data-text='Classes'>
              Classes
            </a>
          </li>

          <li className='header__nav--links__item'>
            <a href='#!' data-text='Events'>
              Events
            </a>
          </li>

          <li className='header__nav--links__item'>
            <a href='#!' data-text='News'>
              News
            </a>
          </li>

          <li className='header__nav--links__item'>
            <a href='#!' data-text='Shop'>
              Shop
            </a>
          </li>

          <div
            className='header__nav--links__toggle-container
          '
            onClick={() => toggle('dark-mode')}
          >
            <input type='checkbox' id='toggle' name='theme' />
          </div>
        </ul>
      </nav>
    </header>
  );
};
