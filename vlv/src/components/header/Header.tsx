import './header.scss';
import { FC } from 'react';

import { Navigation } from '../navigation/Navigation';

export const Header: FC = () => {
  return (
    <header id='header'>
      <Navigation />
    </header>
  );
};
