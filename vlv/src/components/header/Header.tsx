import './header.scss';
import { FC } from 'react';

import { Navigation } from '../navigation/Navigation';

export const Header: FC = () => {
  return (
    <header id='header'>
      <Navigation />
      <div className='wrapper'>
        <a href='#' className='logo'>
          <span>V</span>L<span>V</span>
        </a>

        <div className='content'>
          <h1 className='content-title'>Relax Your Soul</h1>
          <p className='content-para'>
            The team of VLV welcomes you. Start relaxing your soul and enjoy
          </p>
          <a href='#' className='content-link'>
            Discover More
          </a>
        </div>
      </div>
    </header>
  );
};
