import './navigation.scss';
import { FC } from 'react';

export const Navigation: FC = () => {
  return (
    <nav className='main-nav'>
      <input type='checkbox' />
      <div className='hamburger'>
        <div></div>
      </div>
      <div className='menu'>
        <div>
          <div>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Vilas</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
