import { FC } from 'react';

import logo from '../../img/logo/logo.svg';

export const Header: FC = () => {
  return (
    <header className='header'>
      {/* Hamburger lines */}
      <div className='header__menu'>
        <div className='header__menu--line'></div>
      </div>

      {/* Overlay */}
      <div className='header__overlay'></div>

      <nav className='header__nav'>
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

          <div className='header__nav--links__toggle-container'>
            <input type='checkbox' id='toggle' name='theme' />
          </div>
        </ul>
      </nav>
    </header>
  );
};
